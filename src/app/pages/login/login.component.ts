import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {AuthService} from "../../services/auth.service";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {AuthStateService} from "../../services/auth-state.service";
import {ErrorComponent} from "../../components/error/error.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ErrorComponent,
  ],
  providers:[HttpService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private httpService: HttpService,
              private authService: AuthService,
              private authState: AuthStateService,
              private location: Location) {
  }

  form = new FormGroup({
    email: new FormControl<string>('admin@deepersignals.com',{
      validators:Validators.email,
      nonNullable: true}),
    password: new FormControl<string>('password', {
      nonNullable: true})
  })

  submit(){
    this.httpService.login(this.form.value.email, this.form.value.password)
      .subscribe(auth => {
      this.authService.login(auth)
    })
  }

  ngOnInit() {
    if (this.authState.isAuth.value){
      this.location.back()
    }
  }
}
