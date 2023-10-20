import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'

import React from 'react'

const Map = ({markers}) => {
  return (
    <MapContainer className='mapping' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {markers.map((marker, index) => (



    
    <Marker position={marker.position} key={index}>
      <Popup>
    
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    ))}
  </MapContainer>
  )}

export default Map