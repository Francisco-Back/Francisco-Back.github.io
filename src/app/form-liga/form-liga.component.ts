import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Liga } from '../models/liga.model';
import { UserService } from '../services/user.service';
import{ ToastrService } from 'ngx-toastr';
import { UserIDS } from '../models/user-id';
import {UserIDService} from '../services/user-id.service';


@Component({
  selector: 'app-form-liga',
  templateUrl: './form-liga.component.html',
  styleUrls: ['./form-liga.component.css']
})
export class FormLigaComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
    private userIDService: UserIDService,
  ) { }
  liga!: FormGroup;
  userID!: number;
  errMsj!: string;
  isLogged = false;

  ngOnInit(): void {
    this.liga = new FormGroup({
      nombreLiga: new FormControl('',Validators.required),
      fecha_Inicio: new FormControl('', Validators.required),
      fecha_Final: new FormControl('', Validators.required),
      cant_Equipos: new FormControl('',Validators.required),
    });
    this.userID= Number(this.userIDService.getIduser());
  }

  get f(){
    return this.liga.controls;
  }
  onSubmit() {
    if (!this.liga.valid) {
      return;
    }
    let ligue: Liga = this.liga.value;
    console.log(ligue);
    this.userService.createLiga(ligue , this.userID).subscribe((res:any) => {
      console.warn(ligue);
      this.toastr.success('liga Creada ', 'LIGAS', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      //this.router.navigateByUrl('/principal');
    },
    err => {
      this.isLogged = false;
      this.errMsj = err.error.message;
      this.toastr.error(this.errMsj, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      // console.log(err.error.message);
    }

    )
  }

}
