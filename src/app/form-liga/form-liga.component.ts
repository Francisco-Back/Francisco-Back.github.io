import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-liga',
  templateUrl: './form-liga.component.html',
  styleUrls: ['./form-liga.component.css']
})
export class FormLigaComponent implements OnInit {

  constructor() { }
  liga = new FormGroup({
    nombreLiga: new FormControl('',Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    cantEquipos: new FormControl('',Validators.required)
  });


  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.liga.value);
  }

}
