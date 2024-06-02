import { MOCK_CONTINETS_DATA } from '@/mock/continents-data'
import { CountryTradingData } from '@/type/interface'
import { NextResponse } from 'next/server'

type ContinentRecord = {
  continentName: string
  percentageValue: number
  countriesData: CountryTradingData[]
}

export async function GET(req: Request) {
  const continentsData: ContinentRecord[] = MOCK_CONTINETS_DATA

  return NextResponse.json(continentsData)
}
