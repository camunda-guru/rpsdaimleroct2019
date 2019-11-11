import { Component, OnInit } from '@angular/core';
import {AddPolicyHolderService} from "../services/add-policy-holder-service.service";
import {DoughnutData} from "../models/doughnut-data";
import {DoughnutDataSet} from "../models/doughnut-data-set";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
//implements OnInit
export class DashboardComponent implements OnInit{

  private message:string;
  private name:string;
  private countryNames=[];
  private populationArr=[];
  private countrySegment:any;
  private populationSegment:any;
  result:any;
  private data: any;
  doughnutData:DoughnutData= new DoughnutData();
  doughnutDataSet:DoughnutDataSet=new DoughnutDataSet();
  constructor(private addPolicyHolderService:AddPolicyHolderService) {
    this.message="Claim Chart"
  }

  ngOnInit() {

    this.addPolicyHolderService.getCounries().subscribe(response=>{
      this.result=response;

      this.result.forEach(obj=>{
        console.log(obj.name+","+obj.population);
        this.countryNames.push(obj.name);
        this.populationArr.push(obj.population);
      });
     this.doughnutData.labels=this.countryNames;
     this.doughnutDataSet.data=this.populationArr;
      //this.doughnutData.datasets=this.doughnutDataSet;
      this.populationSegment=this.populationArr.slice(1, 10);
      this.countrySegment=this.countryNames.slice(1, 10);
      console.log(this.countryNames);
      this.data = {
        labels: this.countrySegment,
        datasets: [
          {
            label: 'Country vs Population',
            data: this.populationSegment,
            fill: false,
            borderColor: '#4bc1c0'
          }
        ]
      }

    })

  }






  convert()
  {
    this.name=this.name.toUpperCase();
  }
}
