import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { push } from '@firebase/database';
@Component({
  selector: 'app-estadios',
  templateUrl: './estadios.component.html',
  styleUrls: ['./estadios.component.css']
})
export class EstadiosComponent implements OnInit {
  Estadio1: Array<any>=[]
  Estadio2: Array<any>=[]
  Estadio3: Array<any>=[]
  Estadio4: Array<any>=[]
  Estadio5: Array<any>=[]
  Estadio6: Array<any>=[]
  constructor(public database:Database) { }
  ngOnInit(): void {
    this.obtenerEstadios();
  }

  obtenerEstadios(){

  const starEst1 = ref(this.database, 'Estadios/Estadio1');
  onValue(starEst1, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Dato1 = childSnapshot.val();
      let estadios ={nombresta:Dato1.NombreSta,personas:Dato1.Personas,reseña:Dato1.Reseña};
      this.Estadio1.push(estadios);
      console.log(estadios);
    });

});

const starEst2 = ref(this.database, 'Estadios/Estadio2');
onValue(starEst2, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const Dato1 = childSnapshot.val();
    let estadios ={nombresta:Dato1.NombreSta,personas:Dato1.Personas,reseña:Dato1.Reseña};
    this.Estadio2.push(estadios);
    console.log(estadios);
  });
  
});

const starEst3 = ref(this.database, 'Estadios/Estadio3');
onValue(starEst3, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const Dato1 = childSnapshot.val();
    let estadios ={nombresta:Dato1.NombreSta,personas:Dato1.Personas,reseña:Dato1.Reseña};
    this.Estadio3.push(estadios);
    console.log(estadios);
  });
  
});

const starEst4 = ref(this.database, 'Estadios/Estadio4');
onValue(starEst4, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const Dato1 = childSnapshot.val();
    let estadios ={nombresta:Dato1.NombreSta,personas:Dato1.Personas,reseña:Dato1.Reseña};
    this.Estadio4.push(estadios);
    console.log(estadios);
  });
  
});

const starEst5 = ref(this.database, 'Estadios/Estadio5');
onValue(starEst5, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const Dato1 = childSnapshot.val();
    let estadios ={nombresta:Dato1.NombreSta,personas:Dato1.Personas,reseña:Dato1.Reseña};
    this.Estadio5.push(estadios);
    console.log(estadios);
  });
  
});

const starEst6 = ref(this.database, 'Estadios/Estadio6');
onValue(starEst6, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const Dato1 = childSnapshot.val();
    let estadios ={nombresta:Dato1.NombreSta,personas:Dato1.Personas,reseña:Dato1.Reseña};
    this.Estadio6.push(estadios);
    console.log(estadios);
  });
  
});

  }  
}
