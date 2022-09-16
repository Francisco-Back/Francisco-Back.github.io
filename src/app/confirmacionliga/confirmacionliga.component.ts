import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { push } from '@firebase/database';

@Component({
  selector: 'app-confirmacionliga',
  templateUrl: './confirmacionliga.component.html',
  styleUrls: ['./confirmacionliga.component.css']
})

export class ConfirmacionligaComponent implements OnInit {
ligas: Array<any>=[]
usuarios: Array<any>=[]
  constructor(public database:Database) { }

  ngOnInit(): void {
      this.obtenerLiga();
      this.obtenerUsuario();
    }

  registrarLiga(){}

  obtenerLiga(){
    const starCountRef = ref(this.database, 'Ligas/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let liga ={id:childData.id,nombre:childData.nombre,cantidadEquipos:childData.cantidadEquipos,fechaInicio:childData.fechaInicio,fechaFinal:childData.fechaFinal};
        this.ligas.push(liga);
      });
  });
    }

    obtenerUsuario(){
        const starCountRef = ref(this.database, 'Usuarios/');
        onValue(starCountRef, (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            let usuario ={id:childData.id,nombre:childData.nombre,apellido:childData.apellido,pais:childData.pais};
            this.usuarios.push(usuario);
          });
      });
        }

}

