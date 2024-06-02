import { worldMill } from '@react-jvectormap/world'
import dynamic from 'next/dynamic'
import { CountryMapData } from '@/type/interface'
import { FlagIcon, FlagIconCode } from 'react-flag-kit'
import ReactDOMServer from 'react-dom/server'
import { UnitType } from '@/type/enum'
import { PERCENTAGE, UNDEFINED_STRING } from '@/type/constant'

const VectorMap = dynamic(
  () => import('@react-jvectormap/core').then((mod) => mod.VectorMap),
  { ssr: false }
)

type ContinentsMapProps = {
  data: CountryMapData[]
  unit: UnitType
}

type CountryData = {
  [key: string]: number
}

const ContinentMaps: React.FC<ContinentsMapProps> = ({ data, unit }) => {
  const width = window.innerWidth

  const mapWidth =
    width >= 1536
      ? '1392px'
      : width >= 1280
        ? '1136px'
        : width >= 1024
          ? '880px'
          : width >= 768
            ? '624px'
            : '300px'

  const countries = data.reduce((country, countryMapData) => {
    country[countryMapData.country.countryCode] = Number(
      countryMapData.proportion
    )

    return country
  }, {} as CountryData)

  const colorScale = ['#E2AEFF', '#523BBF']

  function flagIcon(code: FlagIconCode) {
    const flagIcon = ReactDOMServer.renderToString(<FlagIcon code={code} />)

    return flagIcon
  }

  function proportionLabel(onHoverCountry: CountryMapData | undefined) {
    if (!onHoverCountry) return UNDEFINED_STRING

    return onHoverCountry.proportion
      ? `${onHoverCountry.proportion}${PERCENTAGE}`
      : UNDEFINED_STRING
  }

  function unitValueLabel(onHoverCountry: CountryMapData | undefined) {
    if (!onHoverCountry) return UNDEFINED_STRING

    switch (unit) {
      case UnitType.Shipments:
        return onHoverCountry.shipments.toLocaleString() || UNDEFINED_STRING
      case UnitType.Weight:
        return onHoverCountry.weights.toLocaleString() || UNDEFINED_STRING
      case UnitType.Teu:
        return onHoverCountry.teu || UNDEFINED_STRING
      default:
        return onHoverCountry.value || UNDEFINED_STRING
    }
  }

  return (
    <div style={{ margin: 'auto', width: mapWidth, height: '500px' }}>
      <VectorMap
        map={worldMill}
        backgroundColor="whitesmoke"
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            } as any,
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          const onHoverCountry = data.find(
            (countryData) => countryData.country.countryCode === code
          )

          return (label as any).html(`
                  <div style="background-color: #000435; min-width: 160px; padding: 10px">
                    <label style="font-size: 1.125rem; line-height: 1.75rem; color: white">${proportionLabel(onHoverCountry)}</label>
                    <div style="display: flex; align-items: center">
                      <div style="margin-right: 6px">${flagIcon(code as FlagIconCode)}</div>
                      <label style="color: white">${(label as any).html()}</label>
                    </div>
                    <div style="display: flex">
                      <label style="margin-right: 6px; color: white">${unitValueLabel(onHoverCountry)}</label>
                      <label style="color: gray; text-transform: capitalize">${unit}</label>
                    </div>
                  </div>`)
        }}
      />
    </div>
  )
}

export default ContinentMaps
