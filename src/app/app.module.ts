import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Ng6UdmChartModule } from './../../projects/ng6-udm-chart/src/lib/ng6-udm-chart.module';
// import { ChartConst } from './../../projects/ng6-udm-chart/src/lib/shared/chart-const';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng6UdmChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
