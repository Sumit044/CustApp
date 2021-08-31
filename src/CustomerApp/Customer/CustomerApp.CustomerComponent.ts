import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Logger/ILogger';
import {Customer} from "./CustomerApp.CustomerModel"


@Component({
  
  templateUrl: './CustomerApp.CustomerComponent.html'
})
export class CustomerComponent {
  
  LogObj : BaseLogger = null;
  constructor(_inject : Injector){
    this.LogObj = _inject.get('1');
    this.LogObj.Log();

  }

  SelectCustomer(_select : Customer){
    this.CustomerModel = _select;
  }
  
  CustomerModel : Customer = new Customer();
  CustomerModels : Array<Customer> = new Array<Customer>();

  Add(){
    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer();
  }

  hasError(controlname : string, typeOfValidator : string) : boolean{
    return this.CustomerModel.formCustomerGroup
                              .controls[controlname]
                              .hasError(typeOfValidator);

  }

}
