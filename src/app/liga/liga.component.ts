import { Component, OnInit } from '@angular/core';
import {Database,set,ref,update,onValue} from '@angular/fire/database';
import { ActivatedRoute,Router } from '@angular/router';
import { push } from '@firebase/database';
import { Liga } from '../models/liga.model';
import { LigaUser } from '../models/ligaUser.model';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';
import{ ToastrService } from 'ngx-toastr';
import { User } from '../models/user.model';
import { Partido } from '../models/partido.model';


@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})

export class LigaComponent implements OnInit {
ligas: Liga = new Liga();
userID!: number | null;
LigasId = 0;
admin = false;
aux!: number | null;
usuarios: Array<any>=[];
usuariosPendientes: Array<any>=[];
partidos: Array<any>=[];
  constructor(
    public database:Database,
    public userService: UserService,
    private route: ActivatedRoute,
    private userIDService: UserIDService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.LigasId = this.route.snapshot.params['id'];
    this.userID = Number(this.userIDService.getIduser());
      this.obtenerLiga();
     this.obtenerUsuario();
     this.obtenerPartidos();
    }


  obtenerLiga(){
    this.userService.Verificador(this.LigasId).subscribe((data:number)=>{
     this.aux=data;
     if(this.aux==this.userID){
      this.admin = true;
    }else{
      this.admin = false;
    }
     
    }
    );

    this.userService.ligasFindById(this.LigasId).subscribe((data:Liga)=>{
        this.ligas = data;
        let userliga = this.ligas.id;
    });
    }

    obtenerUsuario(){
      this.userService.UserLigasFindByLigaID(this.LigasId).subscribe((data: LigaUser[])=>{
        data.forEach((childSnapshot) => {
          const Data1 = childSnapshot;
          let usuario ={IdUnion:Data1.id,Estado:Data1.estado,Nombre:Data1.usuario.nombre, Correo:Data1.usuario.email, Puntaje:Data1.puntaje, Ranking: Data1.ranking };
          if(usuario.Estado=='Pendiente'){
            this.usuariosPendientes.push(usuario);
          }else if(usuario.Estado=='Aceptado'){
            this.usuarios.push(usuario);
          }
        });
        });

  }

  obtenerPartidos(){

    this.userService.allPartidos().subscribe((data: Partido[])=>{
      this.partidos = data;
    });

  }

  //Funciones para Administrar usuarios de la liga
  Aceptar(id:number){
    this.userService.ChangeEstado(id,1).subscribe((data:LigaUser)=>{
      this.toastr.success('Usuario Aceptado', 'OK', {
        timeOut: 3000
      });
      
  }, 
  error =>{
    this.toastr.error('Error al aceptar Usuario:'+error.status, 'Fail', {
      timeOut: 6000,  positionClass: 'toast-top-center',
    });
  }
    );
  }

  Rechazar(id:number){
    this.userService.ChangeEstado(id,2).subscribe((data:LigaUser)=>{
      this.toastr.success('Usuario Rechazado', 'OK', {
        timeOut: 3000
      });
      
  }, 
  error =>{
    this.toastr.error('Error al rechazar usuario:'+error.status, 'Fail', {
      timeOut: 6000,  positionClass: 'toast-top-center',
    });
  });

  }
//Funcion para Invitar Usuarios

invitarUsuario(correo:String){
  this.userService.InvitarLiga(correo, this.userID).subscribe((data:String)=>{
    this.toastr.success('Usuario Invitado: '+correo, 'OK', {
      timeOut: 3000
    });
    
}, 
error =>{

  if(error.status == '200'){
    this.toastr.success('Usuario Invitado: '+correo, 'OK', {
      timeOut: 3000
    });
  }else{
  this.toastr.error('Error al invitar Usuario:'+error.status, 'Fail', {
    timeOut: 6000,  positionClass: 'toast-top-center',
  });
}
}
  );
}


//Redirigir partido a vaticinios

partidoVaticinio(id:number){
  this.router.navigateByUrl('vaticinio/'+id);
}

}
