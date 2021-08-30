import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms"
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRoutes } from '../Routing/CustomerApp.SupplierRouting';




@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule {   }
