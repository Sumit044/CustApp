import {NgForm, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Customer{
    CustomerCode : string = "";
    CustomerName : string = "";
    CustomerAmount : number = 0;

    formCustomerGroup : FormGroup = null;
    constructor(){
        var _builder = new FormBuilder();
        this.formCustomerGroup = _builder.group({});

        this.formCustomerGroup.addControl("CustomerNameControl",
                                             new FormControl('',Validators.required));

        var validatorCollection = [];
        validatorCollection.push(Validators.required);
        validatorCollection.push(Validators.pattern('^[0-9]{4,4}$'));

        this.formCustomerGroup.addControl("CustomerCodeControl", 
                            new FormControl('', Validators.compose(validatorCollection)));

    }

}