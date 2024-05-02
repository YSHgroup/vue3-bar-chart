import type { Formatter } from './types'

export interface ChartData {
  name: string
  data: number
}

export interface ChartOptions {
  title?: string
  dataLabel?: {
    formatter?: Formatter
    color?: string
  }
  tonal?: {
    enable?: Boolean
    formatter?: Formatter
    color?: string
  }
  color?: string[]
}
