import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  url:string = environment.apiBaseUrl + '/PaymentDetail';

  paymentDetailList: PaymentDetail[] = [];

  constructor(private http:HttpClient) { }

  //Defining the get method to get the list of PaymentDetail
  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res =>{
        this.paymentDetailList = res as PaymentDetail[];
      },
      error: err =>{console.log(err)}
    });
  }

}
