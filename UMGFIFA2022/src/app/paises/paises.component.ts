import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: Array<any>=[
    {nombre:'Japon',bandera:'https://s1.significados.com/foto/bandera-japon_sm.png',jugadores:'26',numfifa:'25'},
    {nombre:'Mexico',bandera:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1280px-Flag_of_Mexico.svg.png',jugadores:'26',numfifa:'25'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
