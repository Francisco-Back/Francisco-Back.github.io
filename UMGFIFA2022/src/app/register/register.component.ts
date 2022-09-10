import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  user = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.user.value);
  }
}