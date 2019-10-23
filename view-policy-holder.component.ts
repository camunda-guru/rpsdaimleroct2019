import { Component, OnInit,ViewChild } from '@angular/core';
import {AddPolicyHolderService} from "../../services/add-policy-holder-service.service";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {EditPolicyHolderComponent} from "../edit-policy-holder/edit-policy-holder.component";
@Component({
  selector: 'app-view-policy-holder',
  templateUrl: './view-policy-holder.component.html',
  styleUrls: ['./view-policy-holder.component.css']
})
export class ViewPolicyHolderComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  data:any;
  constructor(private addPolicyHolderService:AddPolicyHolderService,
              private dialog: MatDialog) {


  }
  displayedColumns: string[] = ['adharCardNo', 'firstName','lastName',
    'email','mobileNo','edit'];
  tableSource=new MatTableDataSource();
  ngOnInit() {

    this.addPolicyHolderService.getPolicyHolders().subscribe(response=>{
      console.log(response);
      this.data=response;
      this.tableSource.data=response;
    })
  }
  ngAfterViewInit()
  {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(EditPolicyHolderComponent, {
      width: '500px',
      data: {adharCardNo: data.adharCardNo,
         firstName: data.firstName,
         lastName:data.lastName,
         email:data.email,
         mobileNo:data.mobileNo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result);
     this.updateRowData(result);

    });
  }
  updateRowData(row_obj){
    this.tableSource.data = this.tableSource.data.filter((value)=>{
      if(value.adharCardNo == row_obj.adharCardNo){
        value.firstName = row_obj.firstName;
        value.lastName=row_obj.lastName;
        value.email=row_obj.email;
        value.mobileNo=row_obj.mobileNo;
      }
      return true;
    });
  }



}

