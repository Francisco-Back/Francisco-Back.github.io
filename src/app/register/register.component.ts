import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { ImagenService } from '../services/imagen.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  avatar!: File;
  constructor(
    private userService: UserService,
    private router: Router,
    private imagenService: ImagenService
  ) { }
  user!: FormGroup;

  ngOnInit(): void {
    this.user = new FormGroup({
      nombre: new FormControl('',Validators.required),
      correo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
    });
  }

  get f(){
    return this.user.controls;
  }
  onSubmit() {
    if (!this.user.valid) {
      return ;
    }
    let usuario: User = this.user.value;
    /*this.imagenService.subirImagen(this.avatar).subscribe((data) => {
      this.user.patchValue({avatar: data});
      console.log(usuario);
    });*/
   // usuario= this.user.value;
    this.userService.create(usuario).subscribe((res:any) => {
      console.warn(this.user.value);
    })
    this.router.navigateByUrl('/login');
  }
  onFileChange(event:any){
    this.avatar = event.target.files[0];
  }
}
