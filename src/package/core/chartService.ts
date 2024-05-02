import type { ChartOptions } from '../models/interfaces'
import type { ChartSeries } from '../models/types'
import { ChartBarCalculator } from './chartBarCalculator'

export class ChartOperator extends ChartBarCalculator {
  private chartOptions: ChartOptions = {}
  private optionMode: boolean = false

  constructor(series: ChartSeries, options?: ChartOptions) {
    super(series)
    if (options) {
      this.chartOptions = options
      this.optionMode = true
    }
  }

  public outputDataLabel(name: string, data: number) {
    if (this.optionMode && this.chartOptions.dataLabel && this.chartOptions.dataLabel.formatter) {
      return this.chartOptions.dataLabel.formatter(name, data)
    } else {
      return data
    }
  }
}
