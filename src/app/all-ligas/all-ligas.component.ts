import { Component, OnDestroy, OnInit } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import { Liga } from '../models/liga.model';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-all-ligas',
  templateUrl: './all-ligas.component.html',
  styleUrls: ['./all-ligas.component.css']
})
export class AllLigasComponent implements OnInit {
  searchText: any;
  ligas: Array<any>=[
    {id:1, nombreLiga: "uno", cant_Equipos:3,fecha_Inicio:"16/10/2022",fecha_Final:"16/10/2022", usuario_ID:""},
    {id:1, nombreLiga: "dos", cant_Equipos:2,fecha_Inicio:"16/10/2022",fecha_Final:"16/10/2022", usuario_ID:""},
];

  constructor(  public userService: UserService) { }

  ngOnInit(): void {
    this.obtenerLigas();
  }


  obtenerLigas(){
    this.userService.allLigas().subscribe((data:Liga[])=>{
     this.ligas=data;
    });
  }
}
