import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _api: HttpService,

  ) { }


  getCurrencyRates() {
   return this._api.getReq('/latest?symbols=USD,AUD,CAD,PLN,MXN')
  }


}
