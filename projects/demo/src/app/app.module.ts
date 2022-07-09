import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxI24CircularProgressModule } from 'projects/ngx-i24-circular-progress/src/public-api';
// import { NgxI24CircularProgressModule } from 'ngx-i24-circular-progress';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxI24CircularProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
