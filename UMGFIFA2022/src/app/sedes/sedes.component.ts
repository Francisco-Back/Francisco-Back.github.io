import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { push } from '@firebase/database';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})

export class SedesComponent implements OnInit {
sedes: Array<any>=[]
sedesPais: Array<any>=[]
  constructor(public database:Database) { }

  ngOnInit(): void {
      this.obtenerSede();
      this.obtenerSedePais();
    }

  registrarSede(){}

  obtenerSede(){
    const starCountRef = ref(this.database, 'Sedes/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let sede ={nombre:childData.nombre,imgCiudad:childData.imgCiudad,descripcion:childData.descripcion,estadios:childData.estadios};
        this.sedes.push(sede);
      });
  });
    }

    obtenerSedePais(){
        const starCountRef = ref(this.database, 'SedePais/');
        onValue(starCountRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            let sedePais ={nombre:childData.nombre,imgSedePais:childData.imgSedePais,descripcion:childData.descripcion,poblacion:childData.poblacion};
            this.sedesPais.push(sedePais);
          });
      });
        }

}
