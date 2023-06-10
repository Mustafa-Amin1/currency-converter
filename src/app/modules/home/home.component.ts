import { Component, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currencies!:Array<any>
  public rates!:Object;
  public baseCurrency!:string;
  public targetCurrency!:string;
  public convertedAmount:number = 1;
  reRender:boolean = false
  
  constructor(
    private spinner: NgxSpinnerService,

  ) { }
  
  ngOnInit(): void {
      //get currencies
      this.getCurrencies()
  }

  getCurrencies(){
     this.rates ={"USD":1.076537,"AUD":1.597237,"CAD":1.44283,"PLN":4.446194,"MXN":18.604077}

    this.currencies = [
      "USD","EUR","AUD","CAD","PLN","MXN"
    ]

  }

  convertedData(data:any) {
    this.spinner.show()
    this.reRender= false
    this.baseCurrency = data.currencyFrom
    this.targetCurrency = data.currencyTo
    this.convertedAmount = data.amount
    this.currencies=[]
      this.getCurrencies()
      setTimeout(() => {
        this.reRender= true
        
        this.spinner.hide()
      }, 1000);

  }
}
