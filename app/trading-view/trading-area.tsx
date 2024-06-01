import { CountryTradingData } from "@/type/interface";
import ContinentCard from "../components/continent-card";

type ContinentRecord = {
  continentName: string;
  percentageValue: number;
  countriesData: CountryTradingData[];
};

export default async function TradingArea() {
  const response = await fetch('http://localhost:3000/api/continents', {cache: 'no-store'})

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const continentsData: ContinentRecord[] = await response.json();
  
  return (
    <div className="flex flex-col bg-white p-6 space-y-2">
        <div className="text-md text-black font-bold capitalize">top 5 trading area</div>
        <div className="flex flex-col space-y-4 items-center lg:flex-row lg:space-x-4 lg:space-y-0">
        {continentsData.map((continentData, index) => {
        const opacity = 100 - index * 20; // Decrease opacity by 20 on each iteration
        
        return (
          <ContinentCard
            key={index}
            continentName={continentData.continentName}
            percentageValue={continentData.percentageValue}
            countriesData={continentData.countriesData}
            opacity={opacity.toString()} 
          />
        );
      })}
        </div>
    </div>
  );
} 