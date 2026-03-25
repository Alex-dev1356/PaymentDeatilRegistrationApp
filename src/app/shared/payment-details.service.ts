import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {

  url:string = environment.apiBaseUrl + '/PaymentDetail';

  paymentDetailList: PaymentDetail[] = [];

  formData:PaymentDetail = new PaymentDetail();

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

  //Defining the post method to add a new PaymentDetail
  postPaymentDetail(){
    return this.http.post(this.url, this.formData)
  }

  //Reseting the Form after Submitting
  resetForm(form : NgForm){
    form.form.reset();
    this.formData = new PaymentDetail();
  }

  //Calling another get method after Submitting the form
  refreshListAfterSubmit(){
    this.http.get(this.url + '/AfterSubmit')
    .subscribe({
      next:res => {this.paymentDetailList = res as PaymentDetail[]},
      error: err => {console.log(err)}
    });
  }

}
