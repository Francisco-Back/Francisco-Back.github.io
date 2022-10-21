import { Component, OnDestroy, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import { Liga } from '../models/liga.model';
import { LigaUser } from '../models/ligaUser.model';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';
import{ ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-all-ligas',
  templateUrl: './all-ligas.component.html',
  styleUrls: ['./all-ligas.component.css']
})
export class AllLigasComponent implements OnInit {
  searchText: any;
  userID!: number ;
  ligas: Array<any>=[];
  ligaUser:Array<Liga>=[];
  constructor( 
    public userService: UserService,
    private userIDService: UserIDService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.userID = Number(this.userIDService.getIduser());
    this.obtenerLigas();
  }
 
  obtenerLigas(){
    this.obtenerUserLigas();
    this.userService.allLigas().subscribe((data:Liga[])=>{
     data.forEach((childSnapshot) => {
      const Data1 = childSnapshot;       
      if(Data1.usuario.id!=this.userID){
          let liga = Data1;
          this.ligas.push(liga);
        }
    });
    
    }, error =>{
      this.toastr.error('Error de Servidor:'+error.status, 'Fail', {
      timeOut: 6000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  unirse(id:number){
    this.userService.crearLigaUser(id,this.userID).subscribe((data:LigaUser)=>{
    this.toastr.success('Te has unido correctamente, espera a que el administrador te acepte', 'OK', {
      timeOut: 3000
    });
    }, error =>{
      this.toastr.error('Error al invitar Usuario:'+error.status, 'Fail', {
      timeOut: 6000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  obtenerUserLigas(){
    this.userService.UserLigasFindByUser(this.userID).subscribe((data:LigaUser[])=>{
      data.forEach((childSnapshot) => {
        const Data1 = childSnapshot;       
        let LigasUser=Data1.ligasEntity;
        this.ligaUser.push(LigasUser);
        console.log(this.ligaUser);
      });
    });
  }
}
