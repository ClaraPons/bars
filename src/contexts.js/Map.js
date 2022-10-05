import { createContext, useEffect, useState } from "react";
import dataBars from "../dataBars.json"

const MapContext = createContext({})

const MapContextProvider = ({children}) => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(dataBars)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((location) => {
            setLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        },
        error => {
            console.log(error);
        }
      )
    }, [])

    const value = {
        location: location,
        bars: bars
    }

    return (
        <MapContext.Provider value={value}>{children}</MapContext.Provider>
    )
}

export {MapContext, MapContextProvider}