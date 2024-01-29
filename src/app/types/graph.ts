import {ChartType} from "chart.js";


export interface IGraph {
  data: {
    Agreeableness: number
    Drive: number
    Luck: number
    Openess: number
  }
  type: ChartType
}
