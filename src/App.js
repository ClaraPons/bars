import React from 'react'
import { MapContextProvider } from './contexts.js/Map'
import Map from './components/Map'
import List from './components/List'


const App = () => {
  return (
    <MapContextProvider>
        <Map>
        </Map>
    </MapContextProvider>
  )
}

export default App