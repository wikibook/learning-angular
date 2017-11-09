import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from 
'@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AnimatedComponent } from './animated/animated.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
