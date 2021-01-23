import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('image') image!: String | undefined;
  @Input('featureTitle') featureTitle!: String | undefined;
  @Input('featureDesc') featureDesc!: String | undefined;

}
