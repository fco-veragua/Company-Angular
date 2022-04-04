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

  constructor() { }

  ngOnInit(): void {
  }

}
