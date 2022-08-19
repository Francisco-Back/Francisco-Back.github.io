import { Component, OnInit } from '@angular/core';

import {Database,set,ref,update,onValue} from '@angular/fire/database';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  grupoA: Array<any>=[]
  grupoB: Array<any>=[]
  grupoC: Array<any>=[]
  grupoD: Array<any>=[]
  grupoE: Array<any>=[]
  grupoF: Array<any>=[]
  grupoG: Array<any>=[]
  grupoH: Array<any>=[]

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
        this.grupoA.push(equipo);
      });
    });

    const starCountRef1 = ref(this.database, 'Equipos/GrupoB/');
    onValue(starCountRef1, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoB.push(equipo1);
      });
    });

    const starCountRef2 = ref(this.database, 'Equipos/GrupoC/');
    onValue(starCountRef2, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoC.push(equipo1);
      });
    });

    const starCountRef3 = ref(this.database, 'Equipos/GrupoD/');
    onValue(starCountRef3, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoD.push(equipo1);
      });
    });

    const starCountRef4 = ref(this.database, 'Equipos/GrupoE/');
    onValue(starCountRef4, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoE.push(equipo1);
      });
    });

    const starCountRef5 = ref(this.database, 'Equipos/GrupoF/');
    onValue(starCountRef5, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoF.push(equipo1);
      });
    });

    const starCountRef6 = ref(this.database, 'Equipos/GrupoG/');
    onValue(starCountRef6, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoG.push(equipo1);
      });
    });

    const starCountRef7 = ref(this.database, 'Equipos/GrupoH/');
    onValue(starCountRef7, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let equipo1 ={nombre:childData.nombre,bandera:childData.img,grupo:childData.grupo};
        this.grupoH.push(equipo1);
      });
    });
  }
}