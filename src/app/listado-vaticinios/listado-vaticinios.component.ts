import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-listado-vaticinios',
  templateUrl: './listado-vaticinios.component.html',
  styleUrls: ['./listado-vaticinios.component.css']
})
export class ListadoVaticiniosComponent implements OnInit {

  marcadorForm = new FormGroup({
  marcador1: new FormControl(''),
  marcador2: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  this.onSubmit();
  }

  onSubmit(){
    console.warn(this.marcadorForm.value);
  }



}
