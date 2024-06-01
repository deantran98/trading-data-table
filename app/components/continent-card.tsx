import { TWO_DECIMALS } from '@/type/constant';
import { CountryTradingData } from '@/type/interface';
import React from 'react';
import { FlagIcon } from 'react-flag-kit';

interface ContinentCardProps {
  continentName: string;
  percentageValue: number;
  countriesData: CountryTradingData[];
  opacity?: string
}

const ContinentCard: React.FC<ContinentCardProps> = ({ continentName, percentageValue, countriesData, opacity }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg p-4 w-64 bg-white">
      <div className="flex flex-col justify-center items-center mb-4 space-y-4">
        <div className="text-xl text-gray-500 font-semibold">{continentName}</div>
        <div className={`text-5xl font-bold text-[#523bbf] opacity-${opacity}`}>{percentageValue.toFixed(TWO_DECIMALS)}%</div>
      </div>
      <div className="flex justify-between text-md font-semibold text-black mb-2">
        <div>Country</div>
        <div>Shipments</div>
      </div>
      {countriesData.map((countryData, index) => (
        <div key={index} className="flex justify-between text-md text-gray-500">
          <div className="flex mb-2 space-x-1">
            <div>
              <FlagIcon code={countryData.countryCode}/>
            </div>
            <div>
              {countryData.countryName}
            </div>
          </div>
          <div>{countryData.shipments.toLocaleString()}</div>
        </div>
      ))}
    </div>
  );
};

export default ContinentCard;