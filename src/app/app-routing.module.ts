import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AppComponent } from './app.component';
//import { SaryaPageComponent } from './sarya-page/sarya-page.component';
//import { ShaelynPageComponent } from './shaelyn-page/shaelyn-page.component';
//import { TiffaniePageComponent } from './tiffanie-page/tiffanie-page.component';
//import { LeonardPageComponent } from './leonard-page/leonard-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { ViewtaskPageComponent } from './viewtask-page/viewtask-page.component';




const routes: Routes = [
  { path: '', redirectTo: '/AppComponent', pathMatch: 'full' },
  { path: 'task', component: TaskPageComponent },
  { path: 'viewtask', component: ViewtaskPageComponent }



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
