import { Component } from '@angular/core';
import { PaymentDetailsService } from '../shared/payment-details.service';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.scss']
})
export class PaymentDetailFormComponent {

  constructor(public service:PaymentDetailsService){}

}
