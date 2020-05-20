import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
//import { SaryaPageComponent } from './sarya-page/sarya-page.component';
//import { ShaelynPageComponent } from './shaelyn-page/shaelyn-page.component';
//import { TiffaniePageComponent } from './tiffanie-page/tiffanie-page.component';
//import { LeonardPageComponent } from './leonard-page/leonard-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { TaskPageComponent } from './task-page/task-page.component';
//import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ViewtaskPageComponent } from './viewtask-page/viewtask-page.component';


@NgModule({
  declarations: [
    AppComponent,
  
    TaskPageComponent,
  
    ViewtaskPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
