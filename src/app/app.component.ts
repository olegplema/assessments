import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import {AsyncPipe, NgIf} from "@angular/common";
import {AssessmentsComponent} from "./pages/assessments/assessments.component";
import {HeaderComponent} from "./components/header/header.component";
import {ErrorComponent} from "./components/error/error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NgIf, AsyncPipe, AssessmentsComponent, HeaderComponent, ErrorComponent],
  template: `
    <app-header [title]="title"/>
    <router-outlet/>
  `
})
export class AppComponent{
  title = 'Assessments'
}
