import useMapHook from './MapHook'
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet'
import { styled } from '@stitches/react'
import { MarkerLayerCluster } from './layers/marker-layer-cluster/MarkerLayerCluster'
import { PolygonLayer } from './layers/polygon-layer/PolygonLayer'
import { PropTypes } from 'prop-types'
import { DepartementsPolygonLayer } from './layers/polygon-layer/DepartementsPolygon'
import { active } from 'd3'

const waterBodyGeojson = import.meta.glob(
  '/src/data/geojson/filtered/*.geojson',
  {
    eager: true,
  }
)

const departementGeojson = import.meta.glob(
  '/src/data/geojson/departements/*.geojson',
  {
    eager: true,
  }
)
const waterBody = Object.entries(waterBodyGeojson).map(([, data]) => data)
const departement = Object.entries(departementGeojson).map(([, data]) => data)
const StyledMapContainer = styled(MapContainer, {
  width: '100%',
  height: '100%',
})
export const Map = () => {
  const { coordinates, key } = useMapHook({ waterBody })
  return (
    <StyledMapContainer
      center={coordinates}
      zoom={6.0}
      scrollWheelZoom={true}
      key={key}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM Streets">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer checked name="ESRI World Imagery">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
        </LayersControl.BaseLayer>
        {waterBody.map((data, index) => (
          <div key={index.toString()}>
            <PolygonLayer data={data} />
            <MarkerLayerCluster data={data} />
          </div>
        ))}
        {departement.map((data, index) => (
          <div key={index.toString()}>
            <DepartementsPolygonLayer data={data} />
          </div>
        ))}
      </LayersControl>
    </StyledMapContainer>
  )
}
Map.propTypes = {
  getLakeIdSwotName: PropTypes.func,
  removeLakeActive: PropTypes.func,
  isOneLakeActive: PropTypes.bool,
}
