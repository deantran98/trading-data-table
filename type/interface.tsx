import { FlagIconCode } from 'react-flag-kit'

export interface CountryTradingData {
  countryName: string
  countryCode: FlagIconCode
  proportion?: number
  shipments?: number
  weight?: number
  teu?: number
  value?: number
}

export interface ContinentRecord {
  continentName: string
  percentageValue: number
  countriesData: CountryTradingData[]
}

export interface CountryMapData {
  country: CountryTradingData
  proportion: string
  shipments: string
  weights: string
  teu: string
  value: string
}
