import React, { useState } from 'react'
import './Googlemaps.css'
import { GoogleMap, useJsApiLoader , Autocomplete} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '900px'
};

const center = {
  lat: 40.750183,
  lng: -73.983759,
};

function GoogleMaps() {

  const [autocomplete, setAutocomplete] = useState(null)


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

 
  const onPlaceChanged = ()=>{
    console.log("ADDRESS ",autocomplete.getPlace())
    var places = autocomplete.getPlace()
    console.log("lat",places.geometry.location.lat())
    console.log("lng", places.geometry.location.lng())
  }


  const [map, setMap] = React.useState(null)  
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
   console.log("map", map)
  // console.log(onLoad())


  return isLoaded ? (
            <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      onLoad={onLoad}
      onUnmount={onUnmount}
    > 
      <Autocomplete
      onLoad={(e)=>setAutocomplete(e)}
       onPlaceChanged={onPlaceChanged}
       restrictions={{country: "us"}}>
        <input id='place-id' type='text'  />
      </Autocomplete>
    </GoogleMap>
  ) : <>
  </>
}


export default React.memo(GoogleMaps)