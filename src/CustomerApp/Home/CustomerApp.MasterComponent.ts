import { Component } from '@angular/core';
import { BaseLogger } from '../Logger/ILogger';



@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.MasterComponent.html'
})
export class MasterComponent {
  title = "Customer App";
  LogObj : BaseLogger = null;
  constructor(_logger : BaseLogger){
    this.LogObj = _logger;
    this.LogObj.Log();

  }
 
}
