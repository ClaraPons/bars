import React from 'react'

import { useContext } from 'react'
import { MapContext } from '../contexts.js/Map'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import List from '../components/List'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../App.css'

const markerIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
    iconSize: [32, 50]
})

const Map = () => {

    const { location, bars } = useContext(MapContext)

    // console.log(location);

if(!location) {
    return <p>Vous devez autoriser votre localisation</p>
}
  return (
      <section className='flex '>
      <List/>
        <MapContainer center={[location.lat, location.lng]} zoom={10} scrollWheelZoom={true}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
            {bars.map(bar => {
                return (<Marker position={[bar.latitude, bar.longitude]} icon={markerIcon}>
                    <Popup>
                    
                        <h3>{bar.name}</h3>
                        <p>{bar.address}</p>
                        <p>Price : {bar.price} $</p>
                    </Popup>
                </Marker>)
            })}
        </MapContainer>
        </section>
  )
}

export default Map