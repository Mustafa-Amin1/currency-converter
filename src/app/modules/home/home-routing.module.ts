import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"currency-details",component:CurrencyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
