import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DateFormatterService } from 'src/app/shared/services/date-formatter.service';
import { HttpService } from 'src/app/shared/services/http.service';


@Component({
  selector: 'app-converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss'],
  providers: [DateFormatterService]
})
export class ConverterPanelComponent implements OnInit {

  @Input() title!: string;
  @Input() currencies!: Array<any>
  @Input() rates!: Object
  @Input() showDetails: Boolean = false

  @Input() defaultFormData: any = {
    amount: 1,
    currencyFrom: 'EUR',
    currencyTo: 'USD',
  };

  @Output() emitFormData = new EventEmitter<any>();

  public result!: string | null;
  public formSubmitted: Boolean = false
  public currencyConverterForm!: UntypedFormGroup;
  public selectedRate: any;


  constructor(
    private formBuilder: UntypedFormBuilder,
    private _api: HttpService,
    private dateFunction: DateFormatterService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.initConverterForm()

  }

  initConverterForm() {
    this.currencyConverterForm = this.formBuilder.group(
      {
        amount: [this.defaultFormData.amount, [Validators.required]],
        currencyFrom: [this.defaultFormData.currencyFrom, [Validators.required]],
        currencyTo: [this.defaultFormData.currencyTo, [Validators.required]],
      }
    );
    if (!this.showDetails) {
      this.currencyConverterForm.controls['currencyFrom'].disable();
    }

  }



  submitConverterForm() {
    if (this.currencyConverterForm.valid) {
      this.formSubmitted = true
      let formValue = this.currencyConverterForm.value
      this.getCurrencyRate(formValue.currencyFrom||this.defaultFormData.currencyFrom, formValue.currencyTo, formValue.amount)
      this.emitFormData.emit(this.currencyConverterForm.value)
    }
  }

  selectedCurrenciesChange() {
    let tempValue;
    tempValue = this.currencyConverterForm.value.currencyFrom
    this.currencyConverterForm.controls['currencyFrom'].setValue(this.currencyConverterForm.value.currencyTo)
    this.currencyConverterForm.controls['currencyTo'].setValue(tempValue)
  }


  getCurrencyRate(from: string, to: string, amount: number = 1) {
    let from_rate: number = 0;
    let to_rate: number = 0;


    if (from == 'EUR' || to == 'EUR') {

      for (const [key, value] of Object.entries(this.rates)) {
        if (from == 'EUR') {
          if (key == to) {
            to_rate = value
            let rate = (amount * to_rate)
            this.result = `${rate.toFixed(3)}  ${to}`
            this.selectedRate = `1 ${from} =  ${(to_rate).toFixed(3)}  ${to}`
          }
        }

        if (to == 'EUR') {
          if (key == from) {
            from_rate = value
            let rate = (amount * 1) / from_rate
            this.result = `${rate.toFixed(3)}  ${to}`
            this.selectedRate = `1 ${from} =  ${(rate).toFixed(3)}  ${to}`
          }
        }

      }
    } else {


      for (const [key, value] of Object.entries(this.rates)) {
        if (key == from) {
          from_rate = value
        }
        if (key == to) {
          to_rate = value
        }
      }


      if (to_rate && from_rate) {
        let rate = (amount * to_rate) / from_rate
        this.result = `${rate.toFixed(3)}  ${to}`
        this.selectedRate = `1 ${from} =  ${(to_rate / from_rate).toFixed(3)}  ${to}`
      } else {
        this.result = null
      }

    }
  }

  routeToDetails(from: string, to: string) {
    this.router.navigate(['/home/currency-details'], {
      queryParams: {
        from: from,
        to: to
      }, queryParamsHandling: 'merge'
    })
  }
}
