import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  equipos: Array<any>=[]
  equipos1: Array<any>=[]

  constructor(public database:Database) { }

  ngOnInit(): void {
    this.obtenerEquipo();
  }

  obtenerEquipo(){
    const starCountRef = ref(this.database, 'Equipos/GrupoA/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.equipos.push(equipo);
      });
    });

    const starCountRef1 = ref(this.database, 'Equipos/GrupoB/');
    onValue(starCountRef1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.equipos1.push(equipo1);
      });
    });
  }
}
