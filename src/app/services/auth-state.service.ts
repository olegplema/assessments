import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {IAuth} from "../types/auth";


@Injectable({
  providedIn:'root'
})
export class AuthStateService {

  private _isAuth:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _auth: IAuth = {} as IAuth

  login(auth: IAuth){
    this.auth = auth
    this._isAuth.next(true)
  }

  logout(){
    this.auth = {} as IAuth
    this._isAuth.next(false)
  }

  get isAuth(): BehaviorSubject<boolean> {
    return this._isAuth;
  }

  get auth(): IAuth {
    return this._auth;
  }

  set auth(value: IAuth) {
    this._auth = value;
  }
}
