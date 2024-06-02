'use client'

import { ContinentRecord } from "@/type/interface";
import ContinentCard from "../components/continent-card";
import { useState } from "react";
import { USD } from "@/type/constant";
import { UnitType } from "@/type/enum";

type TradingAreaProps = {
  data: ContinentRecord[];
};


export default function TradingArea({ data }: TradingAreaProps) {
  const [selectedUnit, setSelectedUnit] = useState<UnitType>(UnitType.Shipments);
  
  return (
    <div className="flex flex-col bg-white p-6 space-y-2">
        <div className="flex flex-col space-y-2 items-center lg:flex-row lg:space-y-0 lg:justify-between">
          <div className="text-xl md:text-2xl text-black font-semibold capitalize">top 5 trading area</div>
          <div className="flex space-x-2">
          <div className="text-md md:text-lg text-black capitalize self-center">unit by</div>
          <div className="flex flex-wrap">
          <button
        className={`uppercase px-2 py-1 border rounded-l ${selectedUnit === 'shipments' ? 'bg-[#523bbf] border-[#523bbf]' : 'border border-gray-400 text-gray-500'}`}
        onClick={() => setSelectedUnit(UnitType.Shipments)}
      >
        shipments
      </button>
      <button
        className={`uppercase px-2 py-1 border ${selectedUnit === 'weight' ? 'bg-[#523bbf] border-[#523bbf]' : 'border border-gray-400 text-gray-500'}`}
        onClick={() => setSelectedUnit(UnitType.Weight)}
      >
        weight
      </button>
      <button
        className={`uppercase px-2 py-1 border ${selectedUnit === 'teu' ? 'bg-[#523bbf] border-[#523bbf]' : 'border border-gray-400 text-gray-500'}`}
        onClick={() => setSelectedUnit(UnitType.Teu)}
      >
        teu
      </button>
      <button
        className={`uppercase px-2 py-1 rounded-r border border-gray-400 text-gray-300`}
        disabled
      >
        value ({USD})
      </button>
          </div>
    </div>
        </div>
        <div className="flex flex-col space-y-4 items-center lg:flex-row lg:space-x-4 lg:space-y-0">
        {data.map((continentRecord, index) => {
        const opacity = 100 - index * 20; // Decrease opacity by 20 on each iteration
        
        return (
          <ContinentCard
            key={index}
            continentName={continentRecord.continentName}
            percentageValue={continentRecord.percentageValue}
            countriesData={continentRecord.countriesData}
            opacity={opacity.toString()} 
            unit={selectedUnit}
          />
        );
      })}
        </div>
    </div>
  );
} 