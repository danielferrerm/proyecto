import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() user: any;
   nombre: string;
   email:  string;
   genero:  string;


    constructor() {
      this.nombre = "";
      this.email =  "";
      this.genero = "";
    }


  ngOnInit(): void {
    this.nombre = this.user.nombre;
    this.email = this.user.email;
    this.genero = this.user.genero;
  }


}
