import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../Logger/ILogger';
import {Customer} from "./CustomerApp.CustomerModel"
import {HttpClient} from '@angular/common/http'
import { CustomerModule } from './CustomerApp.CustomerModule';

@Component({
  
  templateUrl: './CustomerApp.CustomerComponent.html'
})


export class CustomerComponent {
  
  LogObj : BaseLogger = null;

  constructor(_inject : Injector, public _httpc:HttpClient){
    this.LogObj = _inject.get('1');
    this.LogObj.Log();


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


  postToServer() {
    var custDto : any = {};
    custDto.CustomerCode = this.CustomerModel.CustomerCode;
    custDto.CustomerName = this.CustomerModel.CustomerName;
    custDto.CustomerAmount = this.CustomerModel.CustomerAmount;

    this._httpc.post("http://localhost:3000/Customers", custDto)
    .subscribe(res=>this.Success(res), 
              res=>this.Error(res))
  }

  Success(res) {
    this.getFromServer();
  }
  Error(data){
    console.log(data);
  }

  getFromServer() {
    this._httpc.get("http://localhost:3000/Customers")
                .subscribe(res=>this.SuccessGet(res)
                            , res=>this.Error(res))
  }

  SuccessGet(data) {
    console.log(data);
    this.CustomerModels = data;
    this.CustomerModel = new Customer();
  }

  SelectCustomer(_select : Customer){
    this.CustomerModel = new Customer();
    this.CustomerModel = _select;
  }
}
