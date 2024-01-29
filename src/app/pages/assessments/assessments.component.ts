import {Component, OnInit} from '@angular/core';
import {IReport} from "../../types/report";
import {HttpService} from "../../services/http.service";
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {ReportComponent} from "../../components/report/report.component";
import {AuthStateService} from "../../services/auth-state.service";
import {ErrorComponent} from "../../components/error/error.component";

@Component({
  selector: 'app-assessments',
  standalone: true,
  imports: [
    AsyncPipe,
    ReportComponent,
    ErrorComponent
  ],
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.css'
})
export class AssessmentsComponent implements OnInit{

  reports$: Observable<IReport[]>

  constructor(private httpService: HttpService,
              private authState: AuthStateService,
              ) {
  }

  ngOnInit(): void {
    this.reports$ = this.httpService.getReports(this.authState.auth.token)
  }
}
