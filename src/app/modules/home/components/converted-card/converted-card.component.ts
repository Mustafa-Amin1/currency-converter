import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-converted-card',
  templateUrl: './converted-card.component.html',
  styleUrls: ['./converted-card.component.scss']
})
export class ConvertedCardComponent implements OnInit {

  @Input() convertedCurrency!: string;
  @Input() base!: string;
  @Input() target!: string;
  @Input() amount!: number;
  @Input() rates!: Object;

  public selectedRate: any;

  constructor() {

  }

  ngOnInit(): void {

    this.getCurrencyRate(this.base, this.target, this.amount)
    
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
            this.selectedRate = `${amount} ${from} =  ${(rate).toFixed(3)}  ${to}`
          }
        }

        if (to == 'EUR') {
          if (key == from) {
            from_rate = value
            let rate = (amount * 1) / from_rate
            this.selectedRate = `${amount} ${from} =  ${(rate).toFixed(3)}  ${to}`
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
        this.selectedRate = `${amount} ${from} =  ${(to_rate / from_rate).toFixed(3)}  ${to}`
      }

    }
  }
}
