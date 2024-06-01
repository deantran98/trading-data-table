import { CountryTradingData } from "@/type/interface";
import { NextResponse } from "next/server";

type ContinentRecord = {
  continentName: string;
  percentageValue: number;
  countriesData: CountryTradingData[];
};

export async function GET(req: Request) {
  const continentsData: ContinentRecord[] = [
    {
      continentName: 'Asia',
      percentageValue: 91.16,
      countriesData: [
        {
          countryName: 'China',
          shipments: 280430,
          countryCode: 'CN',
        },
        {
          countryName: 'India',
          shipments: 62154,
          countryCode: 'IN',
        },
        {
          countryName: 'Bangladesh',
          shipments: 17549,
          countryCode: 'BD',
        },
        {
          countryName: 'Pakistan',
          shipments: 10614,
          countryCode: 'PK',
        },
        {
          countryName: 'Cambodia',
          shipments: 8051,
          countryCode: 'KH',
        },
      ],
    },
    {
      continentName: 'Europe',
      percentageValue: 2.62,
      countriesData: [
        {
          countryName: 'Norway', 
          shipments: 7632,
          countryCode: "NO"
        },
        {
          countryName: 'Romania', 
          shipments: 2290,
          countryCode: "RO"
        },
        {
          countryName: 'Italy', 
          shipments: 1692,
          countryCode: "IT"
        },
        {
          countryName: 'Croatia', 
          shipments: 696,
          countryCode: "HR"
        },
        {
          countryName: 'Hungary', 
          shipments: 513,
          countryCode: "HU"
        },
      ],
    },
    {
      continentName: 'South America',
      percentageValue: 2.85,
      countriesData: [
        {
          countryName: 'Chile', 
          shipments: 7545,
          countryCode: "CL"
        },
        {
          countryName: 'Peru', 
          shipments: 1689,
          countryCode: "PE"
        },
        {
          countryName: 'Colombia', 
          shipments: 1401,
          countryCode: "CO"
        },
        {
          countryName: 'Ecuador', 
          shipments: 663,
          countryCode: "EC"
        },
        {
          countryName: 'Brazil', 
          shipments: 433,
          countryCode: "BR"
        },
      ],
    },
    {
      continentName: 'North America',
      percentageValue: 1.47,
      countriesData: [
        {
          countryName: 'Guatemala', 
          shipments: 2155,
          countryCode: "GT"
        },
        {
          countryName: 'Honduras', 
          shipments: 1910,
          countryCode: "HN"
        },
        {
          countryName: 'Dominican',
          shipments: 1866,
          countryCode: "DO"
        },
        {
          countryName: 'Nicarague', 
          shipments: 1089,
          countryCode: "NI"
        },
        {
          countryName: 'Haiti', 
          shipments: 756,
          countryCode: "HT"
        },
      ],
    },
    {
      continentName: 'Africa',
      percentageValue: 0.89,
      countriesData: [
        {
          countryName: 'Nigeria', 
          shipments: 1863,
          countryCode: "NG"
        },
        {
          countryName: 'Lesotho', 
          shipments: 812,
          countryCode: "LS"
        },
        {
          countryName: 'South Africa', 
          shipments: 766,
          countryCode: "ZA"
        },
        {
          countryName: 'Morocco', 
          shipments: 146,
          countryCode: "MA"
        },
        {
          countryName: 'Namibia', 
          shipments: 88,
          countryCode: "NA"
        },
      ],
    },
  ];

  return NextResponse.json(continentsData);
}
