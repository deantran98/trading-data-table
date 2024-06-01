import TradingArea from "./trading-area";
import TradingTable from "./trading-table";

export default function TradingView() {  
  return (
    <div className="flex flex-col space-y-4">
      <TradingArea />
      <TradingTable />
    </div>
  );
}