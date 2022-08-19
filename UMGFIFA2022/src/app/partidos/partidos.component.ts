import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { push } from '@firebase/database';
@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  Jornada1: Array<any>=[]
  Jornada2: Array<any>=[]
  Jornada3: Array<any>=[]
  constructor(public database:Database) { }

  ngOnInit(): void {
    this.obtenerPartidos();
  }


  obtenerPartidos(){

  const starJor1 = ref(this.database, 'Partidos/Jornada1/');
  onValue(starJor1, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Data1 = childSnapshot.val();
      let partidos ={bandera1:Data1.Bandera1,bandera2:Data1.Bandera2,pais1:Data1.Pais1,
        pais2:Data1.Pais2, horario:Data1.Horario, fecha:Data1.Fecha,grupos1:Data1.Tamaño};
      this.Jornada1.push(partidos);
      console.log(partidos);
    });

   
});
const starJor2 = ref(this.database, 'Partidos/Jornada2/');
  onValue(starJor2, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Data1 = childSnapshot.val();
      let partidos ={bandera1:Data1.Bandera1,bandera2:Data1.Bandera2,pais1:Data1.Pais1,
        pais2:Data1.Pais2, horario:Data1.Horario, fecha:Data1.Fecha,grupos1:Data1.Tamaño};
      this.Jornada2.push(partidos);
      console.log(partidos);
    });

   
});
 
const starJor3 = ref(this.database, 'Partidos/Jornada3/');
  onValue(starJor3, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Data1 = childSnapshot.val();
      let partidos ={bandera1:Data1.Bandera1,bandera2:Data1.Bandera2,pais1:Data1.Pais1,
        pais2:Data1.Pais2, horario:Data1.Horario, fecha:Data1.Fecha,grupos1:Data1.Tamaño};
      this.Jornada3.push(partidos);
      console.log(partidos);
    });

   
});

  }  
}

