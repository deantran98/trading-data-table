import { ContinentRecord } from "@/type/interface";
import ContinentCard from "../components/continent-card";

type TradingAreaProps = {
  data: ContinentRecord[];
};


export default async function TradingArea({ data }: TradingAreaProps) {
  return (
    <div className="flex flex-col bg-white p-6 space-y-2">
        <div className="text-xl md:text-2xl text-black font-semibold capitalize">top 5 trading area</div>
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
          />
        );
      })}
        </div>
    </div>
  );
} 