import { ContinentRecord } from '@/type/interface'
import TradingArea from './trading-area'
import TradingTable from './trading-table'

export default async function TradingView() {
  const response = await fetch('http://localhost:3000/api/continents', {
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const continentsData: ContinentRecord[] = await response.json()

  return (
    <div className="flex flex-col space-y-4">
      <TradingArea data={continentsData} />
      <TradingTable data={continentsData} />
    </div>
  )
}
