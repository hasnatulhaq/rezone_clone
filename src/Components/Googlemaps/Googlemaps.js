import React, { useState } from 'react'
import './Googlemaps.css'
import { GoogleMap, useJsApiLoader , Autocomplete, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '900px'
};



function GoogleMaps() {

  const [autocomplete, setAutocomplete] = useState(null)
  const [lat , setLat] = useState(40.750183)
  const [lng , setLng]  = useState(-73.983759)


  const center = {
    lat,
    lng,
  };
   
  const position={
       lat : lat,
       lng : lng,
  }

  const onRendered = marker => {
    console.log('marker: ', marker)
  }
   
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  })

 
  const onPlaceChanged = ()=>{
    console.log("ADDRESS ",autocomplete.getPlace())
    var places = autocomplete.getPlace()
    setLat(places.geometry.location.lat())
    setLng(places.geometry.location.lng())
  }


  const [map, setMap] = React.useState(null)  
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [lat])

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
      <Marker 
      onLoad={onRendered}
       position={position}
      ></Marker>
    </GoogleMap>
  ) : <>
  </>
}


export default React.memo(GoogleMaps)