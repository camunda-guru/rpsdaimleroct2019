import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable,of as observableOf} from "rxjs/index";
import {EMPTY} from "rxjs/index";
import{pipe} from "rxjs/index";
import{throwError} from "rxjs/index";
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AddPolicyHolderService {

  constructor(private httpClient:HttpClient) {


  }

  addPolicyHolder(policyHolder:any):Observable<any>
  {
     return this.httpClient.post('https://daimlerrpscustomer-cf.cfapps.io/addPolicyHolder',
       policyHolder,httpOptions)
       .pipe(
         catchError( err => {
           if ((err.status > 400)&&(err.status < 500)) {
              return EMPTY;
           } else {
             return throwError(err);
           }
         })
       );
  }


}
