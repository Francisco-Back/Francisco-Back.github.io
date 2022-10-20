import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Liga } from '../models/liga.model';
import { Partido } from '../models/partido.model';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-vaticinio',
  templateUrl: './vaticinio.component.html',
  styleUrls: ['./vaticinio.component.css']
})
export class VaticinioComponent implements OnInit {
ligas: Liga = new Liga();
userID!: number | null;
LigasId = 0;
idpartido = "";
admin = false;
aux!: number | null;
partidos: Partido= new Partido();
  equipo1!: number;
  equipo2!: number;

  constructor(
    public database:Database,
    public userService: UserService,
    private route: ActivatedRoute,
    private userIDService: UserIDService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.idpartido = this.route.snapshot.params['idpartido'];
    this.LigasId = this.route.snapshot.params['idliga'];
    this.userID = Number(this.userIDService.getIduser());
    this.obtenerLiga();
    this.obtenerPartidos(this.idpartido);

  }
  onSubmit(){
    console.warn(this.equipo1);
}

obtenerPartidos(id:String){
  this.userService.partidoFindByID(id).subscribe((data:Partido)=>{
  this.partidos=data;
  console.log(this.partidos);
}, 
error =>{
  this.toastr.error('Error al aceptar Usuario:'+error.status, 'Fail', {
    timeOut: 6000,  positionClass: 'toast-top-center',
  });
}
  );
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
}
