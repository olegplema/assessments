import { Component } from '@angular/core';
import {ErrorService} from "../../services/error.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  constructor(protected errorService: ErrorService) {
  }
}
