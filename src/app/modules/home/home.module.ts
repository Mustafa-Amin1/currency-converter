import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'src/app/shared/interceptors/RequestInterceptor';

//angular material modules
import {MatSelectModule} from '@angular/material/select';

//components
import { HomeComponent } from './home.component';
import { ConverterPanelComponent } from './components/converter-panel/converter-panel.component';
import { ConvertedCardComponent } from './components/converted-card/converted-card.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';

// directives
import { KeyPatternControllerDirective } from 'src/app/shared/directives/key-pattern-controller.directive';
import { NumbersOnlyDirective } from 'src/app/shared/directives/numbers-only.directive';
import { HistoricalChartComponent } from './components/historical-chart/historical-chart.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConverterPanelComponent,
    ConvertedCardComponent,
    NumbersOnlyDirective,
    KeyPatternControllerDirective,
    CurrencyDetailsComponent,
    HistoricalChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSelectModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ]
})
export class HomeModule { }
