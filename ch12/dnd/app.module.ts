import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragItemComponent } from './drag-item/drag-item.component';
import { DropItemComponent } from './drop-item/drop-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DragItemComponent,
    DropItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
