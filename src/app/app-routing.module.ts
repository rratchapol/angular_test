import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { FormgroupComponent } from './formgroup/formgroup.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'formgroup', component: FormgroupComponent },
  { path: 'datatable', component: DatatableComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
