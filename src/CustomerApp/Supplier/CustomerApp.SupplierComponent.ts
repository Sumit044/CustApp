import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Logger/ILogger';


@Component({
  
  templateUrl: './CustomerApp.SupplierComponent.html'
})
export class SupplierComponent {
  
  LogObj : BaseLogger = null;
  constructor(_inject : Injector){
    this.LogObj = _inject.get(2);
    this.LogObj.Log();

  }
}
