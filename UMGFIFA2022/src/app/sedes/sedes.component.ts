import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {
sedes: Array<any>=[
    {nombre:'Doha',imgCiudad:'https://turismo.org/wp-content/uploads/2021/12/skyscrapers-ga4f1b6e43_1280-760x500.jpg',descripcion:'prueba',estadios:'Estadio Al Zumama, Estadio 974'},
    {nombre:'Lusail',imgCiudad:'https://archigus.com/wp-content/uploads/2020/08/qatartower.jpg',descripcion:'prueba',estadios:'Estadio de Lusail'},
    {nombre:'Al Rayyan',imgCiudad:'https://upload.wikimedia.org/wikipedia/commons/4/45/Aerial_view_of_Aspetar_Hospital_in_Baaya.jpg',descripcion:'prueba',estadios:'Estadio Internacional Khalifa, Estadio de la Ciudad de la Educacion, Estadio Ahmad bin Ali'},
    {nombre:'Al Wakrah',imgCiudad:'https://media-cdn.sygictraveldata.com/media/1200x630/612664395a40232133447d33247d383636393139393832',descripcion:'prueba',estadios:'Estadio Al Yanub'},
    {nombre:'Al Khor',imgCiudad:'https://img.ev.mu/images/attractions/2920/960x640/4304.jpg',descripcion:'prueba',estadios:'Estadio Al Bait'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
