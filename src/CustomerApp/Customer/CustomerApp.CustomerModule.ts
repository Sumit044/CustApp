import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CustomerRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule {   }
