import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UsingAContstructor } from './app.component';

@NgModule({
  declarations: [
    UsingAContstructor
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [UsingAContstructor]
})
export class AppModule { }
