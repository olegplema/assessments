import {Component, Input, OnInit} from '@angular/core';
import {IReport} from "../../types/report";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {GraphComponent} from "../graph/graph.component";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    NgOptimizedImage,
    GraphComponent,
    NgClass
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent{

  @Input() report: IReport
  isGraphOpen: boolean = false

  setIsGraphOpen(){
    this.isGraphOpen = !this.isGraphOpen
  }
}
