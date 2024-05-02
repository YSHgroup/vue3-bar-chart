import type { StyleUnit } from '~/models/types'

export const styleSizeSuffixer = (value: string) => {
  const suffixes: StyleUnit[] = ['%', 'px', 'rem']

  value = value.trim()
  if (isNaN(+value)) {
    for (const suffix of suffixes) {
      if (value.endsWith(suffix)) {
        return value
      }
    }
    throw Error('Invalid size format.')
  } else {
    if (!value.length) return '100%'
    return value + 'px'
  }
}

export const removeSpecialCharcters = (value: string) => value.replace(/[./\\?~]/g, '')

export const thousandSeparatorFomatter = (value: number) => value.toLocaleString('en-US')
