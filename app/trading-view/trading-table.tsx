'use client';

import { ArrowDownIcon } from "@/public/svg-icons/arrow-down-icon";
import { KILOGRAM, PERCENTAGE, UNDEFINED_STRING, USD } from "@/type/constant";
import { ContinentRecord, CountryTradingData } from "@/type/interface";
import { FlagIcon } from "react-flag-kit";
import Table from "../components/table";
import { InfoIcon } from "@/public/svg-icons/info-icon";

type TradingTableProps = {
  data: ContinentRecord[];
};

type rowData = {
  country: CountryTradingData;
  area: string;
  proportion?: string;
  shipments?: string;
  weights?: string;
  teu?: string;
  value?: string;
}

export default function TradingTable({ data }: TradingTableProps) {
const tableColumns = [
  {
    header: 'Country',
    accessorKey: 'country',
    cell: ({ cell, row }: any) => {
      return <div className="flex items-center space-x-1">
              <FlagIcon code={row.original.country.countryCode}/>
              <div>{row.original.country.countryName}</div>
            </div>
    }
  },
  {
    header: 'Area',
    accessorKey: 'area',
  },
  {
    header: `Proportion (${PERCENTAGE})`,
    accessorKey: 'proportion',
  },
  {
    header: 'Shipments',
    accessorKey: 'shipments',
  },
  {
    header: `Weights (${KILOGRAM})`,
    accessorKey: 'weights',
  },
  {
    header: 'TEU',
    accessorKey: 'teu',
  },
  {
    header: `Value (${USD})`,
    accessorKey: 'value',
  },
];

const rowData = data.map((continentRecord) => {
  return continentRecord.countriesData.map((countryData) => {
    return {
      country: countryData,
      area: continentRecord.continentName,
      proportion: countryData.proportion || UNDEFINED_STRING,
      shipments: countryData.shipments?.toLocaleString() || UNDEFINED_STRING,
      weights: countryData.weight?.toLocaleString() || UNDEFINED_STRING,
      teu: countryData.teu || UNDEFINED_STRING,
      value: countryData.value || UNDEFINED_STRING,
    } as rowData;
  });
}).flat();

  return (
    <div className="flex flex-col bg-white p-4 space-y-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex space-x-1">
          <div className="text-xl md:text-2xl text-black font-semibold capitalize">trade country table data</div>
          <InfoIcon/>
        </div>
        <button className="border border-gray-500 bg-transparent text-gray-500 px-2 rounded-md">
          <div className="flex uppercase space-x-2">
            <div>export</div>
            <ArrowDownIcon/>
          </div>
        </button>
      </div>
      <Table data={rowData} columns={tableColumns}/>
    </div>
  );
} 