import type { ChartData } from './interfaces'

export type StyleUnit = 'px' | '%' | 'rem'
export type ChartSeries = ChartData[]
export type Formatter = ({ name, data }: { name?: string; data?: number }) => string
