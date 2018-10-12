import { Component, ViewChild } from '@angular/core';
import { NgModel } from "@angular/forms";

@Component({
  selector: 'app',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  model: any = {};
  email: NgModel;
  @ViewChild('email') emailField: NgModel;
  existingEmails: string[] = ["ankit.vadi@bacancytechnology.com"];

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  checkEmail() {
    console.log(this.existingEmails.find(x => x == this.model.email))
    if(this.existingEmails.find(x => x == this.model.email)) {
      console.log("Executed")
      this.emailField.control.setErrors({"emailExists": true});
    }
  }
}
