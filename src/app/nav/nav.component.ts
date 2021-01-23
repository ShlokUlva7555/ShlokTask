import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems: String[] = ['Products', 'Solutions', 'Pricing'];
  @HostBinding('class.sticky') makeSticky: boolean = false;
}
