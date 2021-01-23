import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input('btnText') btnText!: String;
  @Input('btnStyle') btnStyle: String = 'outlined';

}
