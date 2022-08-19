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
  constructor(public database:Database) { }

  ngOnInit(): void {
      this.obtenerSede();
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

}
