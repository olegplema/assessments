import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {AuthStateService} from "../services/auth-state.service";

@Injectable({
  providedIn:'root',
})
export class AdminGuard implements CanActivate, CanActivateChild {

  constructor(private authState: AuthStateService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authState.auth.role === 'Admin'
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state)
  }

}
