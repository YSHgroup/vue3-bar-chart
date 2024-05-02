import type { ChartData } from './interfaces'

export type StyleUnit = 'px' | '%' | 'rem'
export type ChartSeries = ChartData[]
export type Formatter = (name: string, data?: number) => string
