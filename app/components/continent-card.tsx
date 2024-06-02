import { PERCENTAGE, TWO_DECIMALS, UNDEFINED_STRING } from '@/type/constant';
import { UnitType } from '@/type/enum';
import { CountryTradingData } from '@/type/interface';
import React from 'react';
import { FlagIcon } from 'react-flag-kit';

type ContinentCardProps = {
  continentName: string;
  percentageValue: number;
  countriesData: CountryTradingData[];
  opacity?: string
  unit: UnitType
}

const ContinentCard: React.FC<ContinentCardProps> = ({ continentName, percentageValue, countriesData, opacity, unit }) => {
  function unitHeader() {
    switch(unit) {
      case UnitType.Shipments:
        return 'Shipments'
      case UnitType.Weight:
        return 'Weight'
      case UnitType.Teu:
        return 'TEU'
      default:
        return 'Value'
    }
  }

  function unitValue(countryData: CountryTradingData) {
    switch(unit) {
      case UnitType.Shipments:
        return countryData.shipments ? countryData.shipments.toLocaleString() : UNDEFINED_STRING
      case UnitType.Weight:
        return countryData.weight ? countryData.weight.toLocaleString() : UNDEFINED_STRING
      case UnitType.Teu:
        return countryData.teu ? countryData.teu : UNDEFINED_STRING
      default:
        return countryData.value ? countryData.value : UNDEFINED_STRING
    }
  }

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg p-4 w-64 bg-white">
      <div className="flex flex-col justify-center items-center mb-4 space-y-4">
        <div className="text-xl text-gray-500 font-semibold">{continentName}</div>
        <div className={`text-5xl font-bold text-[#523bbf] opacity-${opacity}`}>{percentageValue.toFixed(TWO_DECIMALS)}{PERCENTAGE}</div>
      </div>
      <div className="flex justify-between text-md font-semibold text-black">
        <div>Country</div>
        <div>{unitHeader()}</div>
      </div>
      {countriesData.map((countryData, index) => (
        <div key={index} className="flex justify-between text-md text-gray-500">
          <div className="flex items-center space-x-1">
            <FlagIcon code={countryData.countryCode}/>
            <div>
              {countryData.countryName}
            </div>
          </div>
          <div>{unitValue(countryData)}</div>
        </div>
      ))}
    </div>
  );
};

export default ContinentCard;