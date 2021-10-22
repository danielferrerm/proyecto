import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 listaUsuarios: any[];

  constructor() {
     this.listaUsuarios = [
      {nombre: "Alejandro Toro", email: "alejandro@email.com", genero: "Masculino"},
      {nombre: "Juan Perez", email: "juan@email.com", genero: "Masculino"},
      {nombre: "Camila Gonzales", email: "Camila@email.com", genero: "Femenino"},
      {nombre: "Miguel Toro", email: "miguel@email.com", genero: "Masculino"},
      {nombre: "Andrea Gonzales", email: "andrea@email.com", genero: "Femenino"}
    ]
  }

  ngOnInit(): void {
  }


}
