import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route2Component } from './route2/route2.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'route2',
    component: Route2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
