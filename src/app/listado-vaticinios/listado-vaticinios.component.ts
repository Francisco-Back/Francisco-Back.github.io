import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partido } from '../models/partido.model';
import { Liga } from '../models/liga.model';
import { ToastrService } from 'ngx-toastr';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Vaticinio } from '../models/vaticinio.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listado-vaticinios',
  templateUrl: './listado-vaticinios.component.html',
  styleUrls: ['./listado-vaticinios.component.css']
})
export class ListadoVaticiniosComponent implements OnInit {
  ligas: Liga = new Liga();
  userID!: number | null;
  LigasId = 0;
  idpartido = 0;
  admin = false;
  aux!: number | null;
  partidos: Partido= new Partido();
  marcador1!: number;
  marcador2!: number;
  vaticinio: Array<any>=[];
  listadovaticinio!: FormGroup;

  constructor(
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
      this.ObtenerVaticinios(this.LigasId,this.idpartido);
  }




obtenerPartidos(id:number){
  this.userService.partidoFindByID(id).subscribe((data:Partido)=>{
  this.partidos=data;
  console.log(this.partidos);
},
error =>{
  this.toastr.error('Error al obtener partido:'+error.status, 'Fail', {
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

  ObtenerVaticinios(LigasId:number,idpartido: number){
    this.userService.findVaticinioByLigaIDPartidoID(LigasId,idpartido).subscribe((data:Vaticinio[])=>{
      console.log(data);
      data.forEach((childSnapshot) => {
        const Data1 = childSnapshot;
        let vaticinio ={puntaje:Data1.punteo,nombreUsuario: Data1.usuario.nombre, pais1: Data1.vat1, pais2:Data1.vat2};
          this.vaticinio.push(vaticinio);
      });
      console.log(this.vaticinio);
    });
  }

  ObtenerFecha(){
    let date: Date = new Date();
    console.log("Date = " + date);
  }

  //Actualizar Marcaje
  Marcaje(marcaje1:String,marcaje2:String){
      this.userService.updateMarcajePartido(this.idpartido,Number(marcaje1),Number(marcaje2),this.LigasId).subscribe((data:Partido)=>{
        this.toastr.success('Marcador Actualizado', 'OK', {
          timeOut: 3000
        });

    },
    error =>{
      this.toastr.error('Error al actualizar Marcador:'+error.status, 'Fail', {
        timeOut: 6000,  positionClass: 'toast-top-center',
      });
    }
      );
    }

}
