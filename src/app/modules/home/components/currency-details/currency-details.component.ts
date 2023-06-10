import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss']
})
export class CurrencyDetailsComponent  implements OnInit{

  queryParams: any;
  isShown:boolean = true

  public currencies:Array<any> = [
    "USD","EUR","AUD","CAD","PLN","MXN"
  ]
  public rates!:Object;
  public baseCurrency!:string;
  public targetCurrency!:string;
  public convertedAmount:number = 1;

  public formData!:Object;

  constructor(
    private spinner: NgxSpinnerService,
    private homeService:HomeService,
    private activatedRoute: ActivatedRoute,

  ) {

    this.queryParams = this.activatedRoute.queryParams.subscribe({
      next: (param: any) => {
        this.isShown = false
        this.baseCurrency = param.from
        this.targetCurrency = param.to
        this.formData = {
          amount:this.convertedAmount,
          currencyFrom:this.baseCurrency||'EUR',
          currencyTo:this.targetCurrency||'USD',
        }
        setTimeout(() => {
          this.isShown = true
        }, 200);
        this.getCurrencies()
      },  
      error: err => console.error('An error occurred :', err),  
      complete: () => this.isShown = true
    }
    
      );
  }

  ngOnInit(): void {
  }

  getCurrencies(){
    this.spinner.show()
    this.homeService.getCurrencyRates().subscribe(res=> {
      this.rates = res.rates
      this.spinner.hide()
    })
 }


 ngOnDestroy() {
  this.queryParams?.unsubscribe();
}
}
