import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BadguysComponent } from './badguys/badguys.component';
import { GoodGuysComponent } from './good-guys/good-guys.component';


@NgModule({
  declarations: [
    AppComponent,
    BadguysComponent,
    GoodGuysComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
