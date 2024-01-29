import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {IHeaderButton} from "../types/header-button";
import {BehaviorSubject} from "rxjs";
import {AuthStateService} from "./auth-state.service";


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  private headerButtons: IHeaderButton[] = this.getAllButtons()
  private _activeButtons: BehaviorSubject<IHeaderButton[]> = new BehaviorSubject<IHeaderButton[]>([])
  constructor(private router: Router,
              private authState: AuthStateService) {
    this.authState.isAuth.subscribe(() => {
      this.headerButtons = this.getAllButtons()
    })
  }

  private getActiveButtons(newPath: string){

    console.log(this.headerButtons.filter(b => {
      console.log(b.path != newPath,b.isActive)
      return b.path != newPath && b.isActive
    }))
    return this.headerButtons.filter(b => b.path != newPath && b.isActive)
  }
  navigate(path: string){
    console.log(this._activeButtons)
    this._activeButtons.next(this.getActiveButtons(path))
    this.router.navigate([path])
  }

  moveByButton(button: IHeaderButton){
    console.log(button.action)
    if (button.action){
      button.action()
    }
    this.navigate(button.path)
  }


  get activeButtons(): BehaviorSubject<IHeaderButton[]> {
    return this._activeButtons;
  }

  private getAllButtons(): IHeaderButton[]{
    return [
      {path:'/users', name: 'Admin Page', isActive:this.authState.auth.role === 'Admin'},
      {path:'/assessments', name: 'Assessments', isActive:this.authState.isAuth.value},
      {path:'/', name: 'Logout', isActive:this.authState.isAuth.value, action: this.authState.logout.bind(this.authState)},
    ]
  }
}
