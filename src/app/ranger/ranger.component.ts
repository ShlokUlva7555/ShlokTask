import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrls: ['./ranger.component.scss'],
})
export class RangerComponent {
  @ViewChild('ranger') ranger!: ElementRef;

  value: number = 0;
  percent!: number;
  @Input('label') label!: string;
  @Input('min') min!: number;
  @Input('max') max!: number;
  @Input('showrange') showrange!: boolean;

  constructor(private renderer: Renderer2) { }

  color() {
    this.percent = (this.value - this.min) / (this.max - this.min) * 100;
    this.renderer.setStyle(
      this.ranger.nativeElement,
      'background', 'linear-gradient(to right, var(--purple) 0%, var(--purple)' + this.percent + '%,  #e7daff ' + this.percent + '%, #e7daff 100%)'
    );
  }

}
