import { worldMill } from '@react-jvectormap/world'
import dynamic from 'next/dynamic'
import { colorScale, countries } from './countries'

const VectorMap = dynamic(
  () => import('@react-jvectormap/core').then((mod) => mod.VectorMap),
  { ssr: false }
)

export default function ContinentsMap() {
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
          return (label as any).html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${(label as any).html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code as keyof typeof countries]}
                    </p>
                    </div>`)
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return (label as any).html(`
                  <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px">
                    <p style="color: black !important;">
                    <b>
                    ${(label as any).html()}
                    </b>
                    </p>
                    </div>`)
        }}
      />
    </div>
  )
}
