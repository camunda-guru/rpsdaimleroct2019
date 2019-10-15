window.addEventListener('load',function()
{
    //alert("on load event raised!!!");


    flag=false;
    document.querySelector("#firstName").addEventListener('change',function()
    {

        var articleRef=document.querySelector("#firstNameError");
        while(articleRef.hasChildNodes())
            articleRef.removeChild(articleRef.firstChild);

        var dataRef=document.querySelector("#message");
        dataRef.value=dataRef.value.toUpperCase();

        var firstName=document.querySelector("#firstName").value;

        //regular expression

        if(!firstName.match("^[a-zA-Z]{5,25}$"))
        {
            //create the node
            var node=document.createElement("h4");
            var textNode=document.createTextNode("First Name should be 5,25 characters");
            node.appendChild(textNode);
            document.querySelector("#firstNameError").appendChild(node);

            flag=false
        }


        return flag;



    });



    document.querySelector("#password").addEventListener('change',function() {
        var password=document.querySelector("#password").value;

        var articleRef=document.querySelector("#passwordError");
        while(articleRef.hasChildNodes())
            articleRef.removeChild(articleRef.firstChild);
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (!re.test(password)) {
            //create the node
            var node = document.createElement("h4");
            var textNode = document.createTextNode("Password Format 0aA****, minimum 8 chars");
            node.appendChild(textNode);
            document.querySelector("#passwordError").appendChild(node);
            flag=false
        }

        return flag;

    });

    document.querySelector("#address").addEventListener('change',function() {
        var address=document.querySelector("#address").value;
        var articleRef=document.querySelector("#addressError");
        while(articleRef.hasChildNodes())
            articleRef.removeChild(articleRef.firstChild);
        if ((address.length <5)||(address.length >25)){
            //create the node
            var node = document.createElement("h4");
            var textNode = document.createTextNode("Address should not exceed 150 chars");
            node.appendChild(textNode);
            document.querySelector("#addressError").appendChild(node);
            flag=false;
        }


        return flag;

    });
    document.querySelector("#address").addEventListener('focusout',function()
    {
        if(document.querySelector("#firstNameError").childElementCount ==0)
        {
            if(document.querySelector("#passwordError").childElementCount ==0)
            {
                if(document.querySelector("#addressError").childElementCount ==0)
                    flag=true;
            }
        }

        if(flag)
        {
            document.querySelector("button").classList.remove("disable");
        }
        else
        {
            document.querySelector("button").classList.add("disable");
        }

    })






})

/*

 */
