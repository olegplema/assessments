import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {Router} from "@angular/router";
import {IHeaderButton} from "../../types/header-button";
import {RouterService} from "../../services/router.service";
import {AuthStateService} from "../../services/auth-state.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  @Input() title: string

  constructor(protected authState: AuthStateService,
              protected routerService: RouterService) {
  }

}
