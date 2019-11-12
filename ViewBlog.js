import React,{Component} from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));



export class ViewBlog extends Component
{

    constructor(props)
    {
        super();
        console.log(props.item);
        this.state={
            "userName":props.item,
            "blogs":[]
        }

    }

    listView(data, index){
        return (
            /* <div className="row">
             <div className="col-md-10">
             <li key={index} className="list-group-item clearfix">
             {data.regNo}
             </li>
             </div>
             <div className="col-md-2">
             <button onClick={(e) => this.deleteVehicle(e, index)} className="btn btn-danger">
             Remove
             </button>
             </div>
             </div>*/

            <List key={data.blogId} style={{ backgroundColor: '#a6cad8'}}>
    <ListItem>
        <ListItemAvatar>
        <Avatar>
        <BeachAccessIcon />
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary={data.title} secondary={data.description} />

        </ListItem>
        </List>
    )
    }





    componentDidMount() {

        axios.get('https://daimlerblogapp2019-cf.cfapps.io/findallblogsbyusername/'+this.state.userName)
            .then(res => {
                console.log(res.data);
                this.setState({
                    blogs:res.data
                })
                console.log(this.state.blogs);
            });



    }

    render() {


        return(

            <ul className="list-group">
            {this.state.blogs.map((blog, i) => this.listView(blog, i))}
            </ul>
        )
    }
}
