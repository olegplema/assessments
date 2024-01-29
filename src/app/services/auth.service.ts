import {Injectable} from "@angular/core";
import {IAuth} from "../types/auth";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {RouterService} from "./router.service";
import {AuthStateService} from "./auth-state.service";


@Injectable({
  providedIn:'root',
})
export class AuthService {

  constructor(private routerService: RouterService,
              private authState: AuthStateService) {
  }

  login(auth: IAuth){
    this.authState.login(auth)
    this.routerService.navigate('/assessments')
  }

}
