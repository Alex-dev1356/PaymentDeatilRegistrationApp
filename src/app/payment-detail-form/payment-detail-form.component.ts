import { Component } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.scss']
})
export class PaymentDetailFormComponent {

  constructor(public service:PaymentDetailsService){}

  onSubmit(form : NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next: res => {
        this.service.paymentDetailList = res as PaymentDetail[]
        this.service.resetForm(form)
        this.service.refreshListAfterSubmit()},
      error: err => {console.log(err)}
    });
  }

}
