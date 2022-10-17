import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-vaticinios',
  templateUrl: './listado-vaticinios.component.html',
  styleUrls: ['./listado-vaticinios.component.css']
})
export class ListadoVaticiniosComponent implements OnInit {

  marcador1!: number;
  marcador2!: number;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
      console.warn(this.marcador1);
  }

}
