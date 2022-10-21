import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';
import { push } from '@firebase/database';
import { ToastrService } from 'ngx-toastr';
import { Liga } from '../models/liga.model';
import { LigaUser } from '../models/ligaUser.model';
import { TokenService } from '../services/token.service';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-confirmacionliga',
  templateUrl: './confirmacionliga.component.html',
  styleUrls: ['./confirmacionliga.component.css']
})

export class ConfirmacionligaComponent implements OnInit {
liga: Liga = new Liga();
userID=10;
ligaID=0;
userEmail!: string | null;
usuarios: Array<any>=[];
  constructor( public database:Database,
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute, 
    private tokenService: TokenService,
    private userIDService: UserIDService,
    private toastr: ToastrService,
    ) { }

  ngOnInit(): void { 
    this.userID = Number(this.userIDService.getIduser());
    this.userEmail= this.tokenService.getUserName();
    this.ligaID = this.route.snapshot.params['id'];
      this.obtenerLiga();
      this.obtenerUsuario();
      this.userService.getuserID(this.userEmail).subscribe(
        data => {
         this.userIDService.setIduser((data.userID));
          this.userIDService.setNameUser(data.userName);
          this.userIDService.setAvatarName(data.avatar);
          this.userID = Number(this.userIDService.getIduser());
        });
    }

  registrarLiga(){}

  obtenerLiga(){
    this.userService.ligasFindById(this.ligaID).subscribe((data: Liga)=>{
      this.liga = data;
    });
    }

    obtenerUsuario(){
      this.userService.UserLigasFindByLigaID(this.ligaID).subscribe((data: LigaUser[])=>{
        data.forEach((childSnapshot) => {
          const Data1 = childSnapshot;
          let usuario ={Nombre:Data1.usuario.nombre, Correo:Data1.usuario.email,estado:Data1.estado};
          if(usuario.estado=='Aceptado'){
          this.usuarios.push(usuario);
        }
        });
        console.log(this.usuarios);
        });
}

aceptar(id:number){
  this.userService.crearLigaUser(id,this.userID).subscribe((data:LigaUser)=>{
    this.toastr.success('Te has unido correctamente, espera a que el administrador te acepte', 'OK', {
      timeOut: 3000
    });
    this.router.navigateByUrl('/principal');
    }, error =>{
      this.toastr.error('Error interno:'+error.status, 'Fail', {
      timeOut: 6000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

rechazar(){
  this.router.navigateByUrl('/principal');
}

  }
