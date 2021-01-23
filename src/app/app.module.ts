import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { FeaturesComponent } from './features/features.component';
import { CardComponent } from './card/card.component';
import { StartComponent } from './start/start.component';
import { ScrollSpyModule, ScrollSpyService } from 'ngx-scrollspy';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RangerComponent } from './ranger/ranger.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ButtonComponent,
    FeaturesComponent,
    CardComponent,
    StartComponent,
    CalculatorComponent,
    RangerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollSpyModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
