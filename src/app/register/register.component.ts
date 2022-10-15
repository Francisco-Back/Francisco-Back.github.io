import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private imagenService: ImagenService,
    private toastr: ToastrService
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
    this.userService.create(usuario).subscribe((res:any) => {
      this.toastr.success('Registro Exitoso ' + usuario.nombre, 'OK', {
        timeOut: 6000,  positionClass: 'toast-top-center',
      });
      this.router.navigateByUrl('/login');
    }, 
    error =>{
      console.log(error);
      this.toastr.error('Registro Fallo, porfavor intente en unos minutos', 'Fail', {
        timeOut: 6000,  positionClass: 'toast-top-center',
      });
    })
  }
  onFileChange(event:any){
    this.avatar = event.target.files[0];
  }
}
