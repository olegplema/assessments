import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {AuthStateService} from "../services/auth-state.service";
import {RouterService} from "../services/router.service";

@Injectable({
  providedIn:'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authState: AuthStateService,
              private routerService: RouterService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authState.isAuth.value){
      return true
    } else{
      this.routerService.navigate('')
      return false
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state)
  }

}
