import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Liga } from '../models/liga.model';
import { Partido } from '../models/partido.model';
import { Vaticinio } from '../models/vaticinio.model';
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
idpartido = 0;
vaticinio!: FormGroup;
admin = false;
aux!: number | null;
partidos: Partido= new Partido();
  equipo1!: number;
  equipo2!: number;

  constructor(
    public database:Database,
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private userIDService: UserIDService,
    private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.idpartido = this.route.snapshot.params['idpartido'];
    this.LigasId = this.route.snapshot.params['idliga'];
    this.userID = Number(this.userIDService.getIduser());
    this.obtenerLiga();
    this.obtenerPartidos(this.idpartido);
    this.vaticinio = new FormGroup({
      createDate: new FormControl(''),
      idliga: new FormControl(''),
      idpartido: new FormControl(''),
      iduser: new FormControl(''),
      nombre: new FormControl(''),
      partido: new FormControl(''),
      punteo: new FormControl(''),
      vat1: new FormControl('',Validators.required),
      vat2: new FormControl('',Validators.required),
    });


  }
  
  get f(){
    return this.vaticinio.controls;
  }


  onSubmit() {
    if (!this.vaticinio.valid) {
      return;
    }
    let start = Date.now();
   
    let vaticinio: Vaticinio = this.vaticinio.value;
    this.vaticinio.patchValue({
      createDate: start,
      idliga: this.LigasId,
      idpartido: this.idpartido,
      iduser: this.userID,
      nombre: "prueba",
      partido: "prueba 2",
      punteo: 0
    });
    console.log(this.vaticinio);
    this.userService.crearVaticinio(vaticinio).subscribe((res:any) => {
      this.toastr.success('Vaticinio Enviado', 'Vaticinio', {
        timeOut: 3000
      });
      window.location.reload();
    },

  err => {
    this.toastr.error("No se pudo realizar el vaticinio", 'Fail', {
      timeOut: 3000,  positionClass: 'toast-top-center',
    });
    // console.log(err.error.message);
  })
  }


obtenerPartidos(id:number){
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
