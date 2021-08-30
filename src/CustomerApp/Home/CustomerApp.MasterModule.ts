import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule} from "@angular/forms"
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MasterComponent } from './CustomerApp.MasterComponent';
import { MainRoutes } from '../Routing/CustomerApp.MasterRouting';
import { BaseLogger, ConsoleLogger, DBLogger, FileLogger } from '../Logger/ILogger';

@NgModule({
  declarations: [
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [
    {provide: BaseLogger, useClass : ConsoleLogger},
    {provide: '1', useClass : DBLogger},
    {provide: '2', useClass : FileLogger},

  ],
  bootstrap: [MasterComponent]
})
export class MasterModule {   }
