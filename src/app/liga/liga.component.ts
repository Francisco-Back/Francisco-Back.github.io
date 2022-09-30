import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { ActivatedRoute,Router } from '@angular/router';
import { push } from '@firebase/database';
import { Liga } from '../models/liga.model';
import { LigaUser } from '../models/ligaUser.model';
import { User } from '../models/user.model';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})

export class LigaComponent implements OnInit {
ligas: Liga = new Liga();
userID!: number | null;
LigasId = 0;
admin = true;
usuarios: Array<any>=[];
  constructor(
    public database:Database,
    public userService: UserService,
    private route: ActivatedRoute,
    private userIDService: UserIDService,
    private router: Router) { }

  ngOnInit(): void {
    this.LigasId = this.route.snapshot.params['id'];
    this.userID = Number(this.userIDService.getIduser());
      this.obtenerLiga();
      this.obtenerUsuario();
    }

  registrarLiga(){

  }

  obtenerLiga(){
    this.userService.ligasFindById(this.LigasId).subscribe((data:Liga)=>{
        this.ligas = data;
        let userliga = data.UserEntity_id;
        console.log(this.ligas);
    });
    }

    obtenerUsuario(){
      this.userService.UserLigasFindByLigaID(this.LigasId).subscribe((data: LigaUser[])=>{
        data.forEach((childSnapshot) => {
          const Data1 = childSnapshot;
          let usuario ={Nombre:Data1.usuario.nombre, Correo:Data1.usuario.email };
          this.usuarios.push(usuario);
        });
        console.log(this.usuarios);
        });

}
}