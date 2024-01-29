import {Component, Input, OnInit} from '@angular/core';
import {IReport} from "../../types/report";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {GraphComponent} from "../graph/graph.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    NgOptimizedImage,
    GraphComponent,
    NgClass
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
  animations: [
    trigger('appearance', [
      state('false', style({height: '0'})),
      state('true', style({height: '40vh'})),
      transition('false <=> true', [
        animate('300ms')
      ])
    ])
  ]
})
export class ReportComponent{

  @Input() report: IReport
  isGraphOpen: boolean = false
  isAnimationDone: boolean = false
  setIsGraphOpen(){
    this.isGraphOpen = !this.isGraphOpen
    this.isAnimationDone = false
  }

  animationDone(){
    this.isAnimationDone = true
  }
}
