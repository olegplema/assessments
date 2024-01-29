import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../types/user";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {AuthStateService} from "../../services/auth-state.service";
import {ErrorComponent} from "../../components/error/error.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AsyncPipe, ErrorComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  users$: Observable<IUser[]>

  constructor(private httpService: HttpService,
              private authState: AuthStateService) {
  }
  ngOnInit() {
    this.users$ = this.httpService.getUsers(this.authState.auth.token)
  }
}
