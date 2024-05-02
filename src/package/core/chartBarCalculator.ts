import type { ChartData, ChartOptions } from '../models/interfaces'
import type { ChartSeries } from '../models/types'

export class ChartBarCalculator {
  protected chartText: string[] = []
  protected axisValue: number[] = []
  protected chartSeries: ChartSeries = []

  constructor(series: ChartSeries) {
    this.chartText = series.map((item: ChartData) => item.name)
    this.axisValue = series.map((item: ChartData) => item.data)
    this.chartSeries = series
  }

  public widthCalculator() {
    const sum = this.axisValue.reduce((pre, cur) => pre + cur)
    const barWidthCollection = this.axisValue.map((value) => (value / sum) * 100 + '%')

    return barWidthCollection
  }
}
