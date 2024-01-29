import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {IGraph} from "../../types/graph";
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {ChartType, ChartData, ChartConfiguration} from "chart.js"
import {BaseChartDirective, NgChartsModule} from "ng2-charts";
import DataLabelsPlugin from 'chartjs-plugin-datalabels'
import {colors} from "@angular/cli/src/utilities/color";
import {AuthStateService} from "../../services/auth-state.service";

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [
    NgChartsModule
  ],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit, OnDestroy{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined
  @Input() id: number
  graph: IGraph
  private dataSubscription: Subscription
  barChartType: ChartType
  barChartData: ChartData
  barChartPlugins = [DataLabelsPlugin]
  barChartOptions: ChartConfiguration['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },

  }

  constructor(private httpService: HttpService,
              private authState: AuthStateService) {
  }

  ngOnInit(){
    this.dataSubscription = this.httpService.getGraph(this.authState.auth.token, this.id)
      .subscribe(graph => {
        this.graph = graph
        console.log(this.id,graph)
        this.barChartType = this.graph.type
        this.barChartData = this.createDataset(this.graph)
      })
  }

  createDataset(graph: IGraph): ChartData{
    const data = {} as ChartData<ChartType, any, string>
    data.labels = Object.keys(graph.data)
    data.datasets = [
      {data: data.labels.map(l => graph.data[l]), backgroundColor:'#7FFFD4'}
    ]
    return data
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe()
  }
}
