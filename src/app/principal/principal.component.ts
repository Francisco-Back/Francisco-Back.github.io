import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Liga } from '../models/liga.model';
import { TokenService } from '../services/token.service';
import { UserService } from '../services/user.service';
import {UserIDService} from '../services/user-id.service';
import{ ToastrService } from 'ngx-toastr';
import { UserIDS } from '../models/user-id';
import { LigaUser } from '../models/ligaUser.model';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  Jornada1: Array<any>=[];
  Jornada2: Array<any>=[];
  Jornada3: Array<any>=[];
  ligas: Liga[]=[]; //almacena las ligas que yo administro
  ligaUser: Array<any>=[]; //almacena las ligas que pertenezco
  userEmail!: string | null;
  userID!: number | null;
  userIDE!: UserIDS;
  errMsj!: string;


  isLogged = false;


  constructor(
    public database:Database,
    public userService: UserService,
    private router: Router,
    private tokenService: TokenService,
    private userIDService: UserIDService,
    private toastr: ToastrService ) { }
  


  ngOnInit(): void {
    this.userEmail= this.tokenService.getUserName();
    //this.obtenerUser();
    this.SetUserID();
   //
  }

  SetUserID(): void {
    this.userService.getuserID(this.userEmail).subscribe(
      data => {
        this.isLogged = true;
       this.userIDService.setIduser((data.userID));
        this.userIDService.setNameUser(data.userName);
        this.userIDService.setAvatarName(data.avatar);
     this.toastr.success('Bienvenido ' + data.userName+data.userID, 'OK', {
          timeOut: 3000
        });
        this.userID = Number(this.userIDService.getIduser());
        this.obtenerLiga();
        this.obtenerLigaUser();
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
  }



  
  //Obtener liga Admin
  obtenerLiga(){
   this.userService.ligasFindByUserId(this.userID).subscribe((data: Liga[])=>{

        this.ligas = data;
    });
    }

//Obtener liga User

    obtenerLigaUser(){

      this.userService.UserLigasFindByUser(this.userID).subscribe((data: LigaUser[])=>{
        data.forEach((childSnapshot) => {
          const Data1 = childSnapshot;
          let liga ={LigaId:Data1.ligasEntity.id, LigaNombre:Data1.ligasEntity.nombreLiga,estado:Data1.estado };
          if(liga.estado=='Aceptado'){
          this.ligaUser.push(liga);
        }
        });
    });
    }
  /*obtenerUser(){
    }*/
  verLiga(id: number){
    this.router.navigate(['/liga/' + id]);
  }
}
