import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

  /*
    Puedo aplicar estilos in-line(de esta forma, omito la llamada al componente CSS ):
    styles:["p{background-color: blue;}"]
  */
  /*
    De la misma forma, puedo replicar la acción con el template:
    template:...
  */
})
export class EmployeeComponent implements OnInit {

  // employee properties
  name = "Fco";

  lastName = "Veragua";

  age = 23;

  // company = "Berger-Levrault";

  // property to activate input visibility

  enableInput = true;

  // property to activate check of registered user

  registeredUser = true;

  // property to know if the user is registered (string)

  textToKnowRegistered = "No one is registered";

  /*
  getAge() {
    return this.age;
  }
  */

  // function to change registeredUser status (check)

  getRegisteredUser() {
    this.registeredUser = false;

  }

  // function to create popup

  setRegisteredUser(event: Event) {
    // alert("The user has already registered!");

    // this.textToKnowRegistered = "Registered User!";
    // alert(event.target);
    (<HTMLInputElement>event.target).value == "yes" ? this.textToKnowRegistered = "Registered User!" : this.textToKnowRegistered = "No one is registered";
  }

  // function to change COMPANY NAME

  callCompany(value: String) {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
