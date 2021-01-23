import { Component, OnInit } from '@angular/core';
import { Card } from '../card/models/cars.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  cards: Card[] = new Array();
  cardsList: any[] = new Array();

  constructor() {
    this.cards.push(
      {
        image: 'assets/img/card/Get Paid Instantly.png',
        title: 'Quick cash disbursement',
        desc: 'Get terms loans that your business needs within 72 hrs'
      },
      {
        image: 'assets/img/card/Low interest rate.png',
        title: 'Low-interest rate',
        desc: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
      },
      {
        image: 'assets/img/card/Secure Payments.png',
        title: 'Zero Paperwork',
        desc: 'Get started instantly by submitting only your basic details & bank statements'
      },
      {
        image: 'assets/img/card/freelancer_feature_icon.png',
        title: 'Ace your business finances',
        desc: 'Manage banking, accounting & everything in between, on one platform'
      },
      {
        image: 'assets/img/card/Covid.png',
        title: 'Loans to fight COVID-19',
        desc: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
      });
    for (let i = 0; i < this.cards.length; i++) {
      let divideFactor = 3;
      if (this.cards.length <= 3) {
        divideFactor = this.cards.length;
      }
      let slicedcard = this.cards.splice(divideFactor, divideFactor);
      this.cardsList.push(this.cards);
      this.cards = slicedcard;
    }

  }

}
