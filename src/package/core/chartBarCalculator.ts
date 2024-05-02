export class ChartBarCalculator {
  private chartText: string[] = []
  private axisValue: number[] = []

  constructor(textList: string[], valueList: number[]) {
    this.chartText = textList
    this.axisValue = valueList
  }

  public widthCalculator() {
    const sum = this.axisValue.reduce((pre, cur) => pre + cur)
    const barWidthCollection = this.axisValue.map((value) => (value / sum) * 100 + '%')

    return barWidthCollection
  }
}
