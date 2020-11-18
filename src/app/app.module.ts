import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabulatorTableComponent } from './tabulator-table/tabulator-table.component';
// import * as moment from 'moment';

@NgModule({
  declarations: [
    AppComponent,
    TabulatorTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
