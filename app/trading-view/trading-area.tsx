'use client'

import { ContinentRecord } from '@/type/interface'
import ContinentCard from '../components/continent-card'
import { useState } from 'react'
import { USD } from '@/type/constant'
import { UnitType } from '@/type/enum'
import dynamic from 'next/dynamic'

const ContinentsMap = dynamic(() => import('./continents-map/continents-map'), {
  ssr: false,
})

type TradingAreaProps = {
  data: ContinentRecord[]
}

export default function TradingArea({ data }: TradingAreaProps) {
  const [selectedUnit, setSelectedUnit] = useState<UnitType>(UnitType.Shipments)

  return (
    <div className="flex flex-col space-y-6 bg-white p-6">
      <div className="flex flex-col items-center space-y-2 lg:flex-row lg:justify-between lg:space-y-0">
        <div className="text-xl font-semibold capitalize text-black md:text-2xl">
          top 5 trading area
        </div>
        <div className="flex space-x-2">
          <div className="text-md self-center font-semibold capitalize text-black md:text-lg">
            unit by
          </div>
          <div className="flex flex-wrap">
            <button
              className={`rounded-l border px-2 py-1 uppercase ${selectedUnit === 'shipments' ? 'border-[#523bbf] bg-[#523bbf] text-white' : 'border border-gray-400 text-gray-500'}`}
              onClick={() => setSelectedUnit(UnitType.Shipments)}
            >
              shipments
            </button>
            <button
              className={`border px-2 py-1 uppercase ${selectedUnit === 'weight' ? 'border-[#523bbf] bg-[#523bbf] text-white' : 'border border-gray-400 text-gray-500'}`}
              onClick={() => setSelectedUnit(UnitType.Weight)}
            >
              weight
            </button>
            <button
              className={`border px-2 py-1 uppercase ${selectedUnit === 'teu' ? 'border-[#523bbf] bg-[#523bbf] text-white' : 'border border-gray-400 text-gray-500'}`}
              onClick={() => setSelectedUnit(UnitType.Teu)}
            >
              teu
            </button>
            <button
              className={`rounded-r border border-gray-400 px-2 py-1 uppercase text-gray-300`}
              disabled
            >
              value ({USD})
            </button>
          </div>
        </div>
      </div>

      <div className="flex self-center">
        <ContinentsMap />
      </div>

      <div className="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
        {data.map((continentRecord, index) => {
          const opacity = 100 - index * 20 // Decrease opacity by 20 on each iteration

          return (
            <ContinentCard
              key={index}
              continentName={continentRecord.continentName}
              percentageValue={continentRecord.percentageValue}
              countriesData={continentRecord.countriesData}
              opacity={opacity.toString()}
              unit={selectedUnit}
            />
          )
        })}
      </div>
    </div>
  )
}
