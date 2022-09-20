import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { Router } from '@angular/router';
import { push } from '@firebase/database';
import { Liga } from '../models/liga.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-confirmacionliga',
  templateUrl: './confirmacionliga.component.html',
  styleUrls: ['./confirmacionliga.component.css']
})

export class ConfirmacionligaComponent implements OnInit {
liga: Liga = new Liga();
userID=20;
ligaID=23;
usuarios: Array<any>=[]
  constructor( public database:Database,
    public userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
      this.obtenerLiga();
      this.obtenerUsuario();
    }

  registrarLiga(){}

  obtenerLiga(){
    /*const starCountRef = ref(this.database, 'Ligas/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let liga ={id:childData.id,nombre:childData.nombre,cantidadEquipos:childData.cantidadEquipos,fechaInicio:childData.fechaInicio,fechaFinal:childData.fechaFinal};
        this.ligas.push(liga);
      });
  });*/
    this.userService.ligasFindById(this.ligaID).subscribe((data: Liga)=>{
      this.liga = data;
    });
    }

    obtenerUsuario(){
            const starCountRef = ref(this.database, 'Usuarios/');
            onValue(starCountRef, (snapshot) => {
              snapshot.forEach((childSnapshot) => {
                const childData = childSnapshot.val();
                let usuario ={nombre:childData.nombre,correo:childData.correo};
                this.usuarios.push(usuario);
              });
          });
            }

}

