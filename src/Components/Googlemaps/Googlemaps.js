import React, {useState } from 'react'
import './Googlemaps.css'
import { GoogleMap, useJsApiLoader , Autocomplete, Marker} from '@react-google-maps/api';
// import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';
// import axios from 'axios'
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { MVTLayer } from "deck.gl";

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
console.log({position})
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
  // console.log(onLoad())
  // let layers 
  // useEffect(()=>{
  //  const data = axios.get('https://testing-api.zoneomics.com/tiles/zones?x=2416&y=3081&z=13&city_id=265').then((res)=>console.log('api',{res}))
  
  // layers= new MVTLayer({
  //   data :  data,
  // }) 
  // },[])


  // console.log(layers , "tiles data")
  // const layers = new MVTLayer({
  //       data : 'https://testing-api.zoneomics.com/tiles/zones?x=2416&y=3081&z=13&city_id=265'
  // })

  


  // console.log(layers , "from mvt layer")

  const deckOverlay = new GoogleMapsOverlay({
    layers: [
      new MVTLayer({
        data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=265`,
        minZoom: 0,
        maxZoom: 23,
        getLineColor: [192, 192, 192],
        getFillColor: [140, 170, 180],
      }),
    ]
  });
  

  return isLoaded ? (
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      // onLoad={onLoad}
      onUnmount={onUnmount}
      onLoad={map => {
        deckOverlay.setMap(map); 
      }}
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