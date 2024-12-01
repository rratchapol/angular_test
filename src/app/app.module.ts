import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './datatable/datatable.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FormComponent,
    FormgroupComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
