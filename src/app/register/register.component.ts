import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
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
      return;
    }
    let usuario: User = this.user.value;
    this.userService.create(usuario).subscribe((res:any) => {
      console.warn(this.user.value);
    })

   this.userService.getAll().subscribe((data: User) => {
      let users = data;
      console.log(users);
      this.router.navigateByUrl('/login');
 })
  }
}
