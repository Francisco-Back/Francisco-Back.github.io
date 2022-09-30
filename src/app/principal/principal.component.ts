import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Liga } from '../models/liga.model';
import { User } from '../models/user.model';
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
    this.obtenerPartidos();
    this.SetUserID();
    this.userID = Number(this.userIDService.getToken());
    this.obtenerLiga();
    this.obtenerLigaUser();
  }

  SetUserID(): void {
    console.log("Si inicia");
    console.log("Datos de user"+this.userService.getuserID(this.userEmail));
    this.userService.getuserID(this.userEmail).subscribe(
      data => {
        this.isLogged = true;
       this.userIDService.setIduser((data.userID));
        this.userIDService.setNameUser(data.userName);
        this.userIDService.setAvatarName(data.avatar);
     this.toastr.success('Bienvenido ' + data.userID, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        console.log("datos Cargados")

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



  obtenerPartidos(){

  const starJor1 = ref(this.database, 'Partidos/Jornada1/');
  onValue(starJor1, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Data1 = childSnapshot.val();
      let partidos ={bandera1:Data1.Bandera1,bandera2:Data1.Bandera2,pais1:Data1.Pais1,
        pais2:Data1.Pais2, horario:Data1.Horario, fecha:Data1.Fecha,grupos1:Data1.Tamaño};
      this.Jornada1.push(partidos);
    });



});
const starJor2 = ref(this.database, 'Partidos/Jornada2/');
  onValue(starJor2, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Data1 = childSnapshot.val();
      let partidos ={bandera1:Data1.Bandera1,bandera2:Data1.Bandera2,pais1:Data1.Pais1,
        pais2:Data1.Pais2, horario:Data1.Horario, fecha:Data1.Fecha,grupos1:Data1.Tamaño};
      this.Jornada2.push(partidos);
    });


});

const starJor3 = ref(this.database, 'Partidos/Jornada3/');
  onValue(starJor3, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const Data1 = childSnapshot.val();
      let partidos ={bandera1:Data1.Bandera1,bandera2:Data1.Bandera2,pais1:Data1.Pais1,
        pais2:Data1.Pais2, horario:Data1.Horario, fecha:Data1.Fecha,grupos1:Data1.Tamaño};
      this.Jornada3.push(partidos);
    });


});

  }

  //Obtener liga Admin
  obtenerLiga(){
   this.userService.ligasFindByUserId(this.userID).subscribe((data: Liga[])=>{
        this.ligas = data;
        console.log(this.ligas);
    });
    }

//Obtener liga User

    obtenerLigaUser(){
      this.userService.UserLigasFindByUser(this.userID).subscribe((data: LigaUser[])=>{
        data.forEach((childSnapshot) => {
          const Data1 = childSnapshot;
          let liga ={LigaId:Data1.ligasEntity.id, LigaNombre:Data1.ligasEntity.nombreLiga };
          this.ligaUser.push(liga);
        });
        console.log(this.ligaUser);
    });
    }
  /*obtenerUser(){
      this.userService.GetUserByEmail(this.userEmail).subscribe((data: User[])=>{
        let user: User[] = data;
        this.userID = user[0].id;
        console.log(this.userID);
        this.obtenerLiga();
    });
    }*/
  verLiga(id: number){
    this.router.navigate(['/liga/' + id]);
  }
}
