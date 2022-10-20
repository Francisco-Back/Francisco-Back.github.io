import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private toastr: ToastrService,
    private route: ActivatedRoute,
  ) { }
  user!: FormGroup;
  ligaID!: number;

  ngOnInit(): void {
    this.ligaID = this.route.snapshot.params['id'];
    this.user = new FormGroup({
      nombre: new FormControl('',Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      avatar: new FormControl('')
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
      if(this.ligaID != null){
        this.router.navigateByUrl('/login/'+this.ligaID);
      }else{
        this.router.navigateByUrl('/login');

      }
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
