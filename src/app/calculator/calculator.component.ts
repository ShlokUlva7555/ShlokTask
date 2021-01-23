import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RangerComponent } from '../ranger/ranger.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterViewInit { 

  constructor(private _fb: FormBuilder) { }

  calculatorForm = this._fb.group({   
    repaymentTeure: ['6'],
    isExistingLoans: [''],
    existingLoanEMI:['']   
  });

  loanAmount: string = '0';
  emiAmount: string = '0';

  @ViewChild('monthlyIncome')
  monthlyIncomemodal!: RangerComponent;
  @ViewChild('monthlyExpense')
  monthlyExpensemodal!: RangerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   
  }


  calculation = () => {

    let data = {
      "repaymentTeure": Number(this.calculatorForm.value.repaymentTeure),
      "isExistingLoans": Boolean(this.calculatorForm.value.isExistingLoans),
      "existingLoanEMI": Number(this.calculatorForm.value.existingLoanEMI),
      "monthlyIncome": Number(this.monthlyIncomemodal.value),
      "monthlyExpense": Number(this.monthlyExpensemodal.value),     
    };

    if(data.monthlyIncome > 0 && data.monthlyExpense > 0)
    {
      let remainAmount = Math.round(data.monthlyIncome - data.monthlyExpense);    
      let possibleLoanAmount = Math.round(remainAmount * data.repaymentTeure);

      this.loanAmount = possibleLoanAmount.toString();
      this.emiAmount = remainAmount.toString();
    }
    
    if(data.isExistingLoans && data.existingLoanEMI > 0)
    {
      this.loanAmount = Math.round(data.existingLoanEMI * data.repaymentTeure).toString();
      this.emiAmount = Math.round(data.existingLoanEMI).toString();      
    }

  }

}
