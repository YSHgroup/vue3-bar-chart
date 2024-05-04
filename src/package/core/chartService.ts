import type { ChartOptions } from '../models/interfaces'
import type { ChartSeries } from '../models/types'
import { ChartBarCalculator } from './chartBarCalculator'

export class ChartOperator extends ChartBarCalculator {
  private chartOptions: ChartOptions = {}
  private optionMode: boolean = false
  // public title: string = 'Simple Bar Chart'

  constructor(series: ChartSeries, options?: ChartOptions) {
    super(series)
    if (options) {
      this.chartOptions = options
      // if (options.title) this.title = options.title

      this.optionMode = true
    }
  }

  public outputDataLabel({ name, data }: { name?: string; data?: number }) {
    if (this.optionMode && this.chartOptions.dataLabel && this.chartOptions.dataLabel.formatter) {
      return this.chartOptions.dataLabel.formatter({ name, data })
    } else {
      return data
    }
  }

  public outputTonalLabel({ sum }: { sum?: number }) {
    if (this.optionMode && this.chartOptions.tonal && this.chartOptions.tonal.formatter) {
      return this.chartOptions.tonal.formatter({ data: sum })
    } else {
      return sum
    }
  }

  public backgroundSetter(index: number) {
    if (
      this.optionMode &&
      this.chartOptions.background_image?.length &&
      this.chartOptions.background_image[index]
    ) {
      return {
        backgroundImage: `url(${this.chartOptions.background_image[index]}`,
        backgroundSize: '18px 20px'
      }
    } else if (this.optionMode && this.chartOptions.color) {
      return { backgroundColor: this.chartOptions.color[index] }
    } else {
      return {}
    }
  }
}
