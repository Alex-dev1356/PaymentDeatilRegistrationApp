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

  onSubmit(form : NgForm){}

}
