import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AssessmentsComponent} from "./pages/assessments/assessments.component";
import {AuthGuard} from "./guards/auth.guard";
import {UsersComponent} from "./pages/users/users.component";
import {AdminGuard} from "./guards/admin.guard";

export const routes: Routes = [
  {path:'assessments', component: AssessmentsComponent, canActivate:[AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate:[AuthGuard,AdminGuard]},
  {path:'', component: LoginComponent},
  {path:'**', redirectTo:''},
]
