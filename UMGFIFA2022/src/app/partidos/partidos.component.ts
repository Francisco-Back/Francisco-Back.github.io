import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { push } from '@firebase/database';
@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  paises: Array<any>=[]
  constructor(public database:Database) { }

  ngOnInit(): void {
    this.obtenerPais();
  }

  registrarPais(){}

  obtenerPais(){
  const starCountRef = ref(this.database, 'Paises/');
  onValue(starCountRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      let pais ={nombre:childData.nombre,bandera:childData.img,jugadores:childData.region,numfifa:childData.numFifa};
      this.paises.push(pais);


      
    });
});

  }  
}

