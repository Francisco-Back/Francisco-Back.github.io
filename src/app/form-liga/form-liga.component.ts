import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Liga } from '../models/liga.model';
import { UserIDService } from '../services/user-id.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-form-liga',
  templateUrl: './form-liga.component.html',
  styleUrls: ['./form-liga.component.css']
})
export class FormLigaComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private userIDService: UserIDService
  ) { }
  liga!: FormGroup;
  userID =0 ;

  ngOnInit(): void {
    this.liga = new FormGroup({
      nombreLiga: new FormControl('',Validators.required),
      fecha_Inicio: new FormControl('', Validators.required),
      fecha_Final: new FormControl('', Validators.required),
      cant_Equipos: new FormControl('',Validators.required),
    });
    this.userID = Number(this.userIDService.getToken());
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
      //this.router.navigateByUrl('/principal');
    })
  }

}
