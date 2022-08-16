import React, {useEffect, useRef, useState } from 'react'
import './Googlemaps.css'
import { GoogleMap, useJsApiLoader , Autocomplete, Marker , OverlayView} from '@react-google-maps/api';
import axios from 'axios'
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { MVTLayer } from "deck.gl";
import { staticColor } from "../../Color.js";

const containerStyle = {
  width: '100%',
  height: '900px',
};


function GoogleMaps() {

  const [autocomplete, setAutocomplete] = useState(null)
  const [lat , setLat] = useState(40.750183)
  const [lng , setLng]  = useState(-73.983759)
  const [zone, SetZone] = useState([]);
  const [Cityid , SetCityId] = useState();
  const [colors, setColors] = useState();
  const ref = useRef();
  const [map, setMap] = useState(null);
  // const [zoom, setZoom] = useState(8)

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
    var places = autocomplete.getPlace()
    setLat(places.geometry.location.lat())
    setLng(places.geometry.location.lng())
  }



  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

   useEffect(()=>{
         async function getData(){
           try{
            const res=await axios.get('https://testing-api.zoneomics.com/cities/findByLatLng?lat='+lat+'&lng='+lng, )
          if(res?.data?.data)
                  console.log(res.data)
                  SetZone(res.data.data.zoneCode);
                  SetCityId(res.data.data.id);
           } catch(error){
                console.log("Not found any zone data",error);
           }
         }
         getData()
   },[lat,lng]);
  
  useEffect(() => {
    setColors(staticColor);
  }, []);


  let deckOverlay;

  deckOverlay = new GoogleMapsOverlay({
    layers: [
      new MVTLayer({
        data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=${Cityid}`,
        minZoom: 0,
        maxZoom: 23,
        getLineColor: [19, 180 , 192],
        getFillColor: [19, 180 , 192],
      }),
    ]
  });
  deckOverlay.setMap(map)
     

  return (
    <>
    <GoogleMap
      ref={map}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    > 
      <Autocomplete
      onLoad={(e)=>setAutocomplete(e)}
       onPlaceChanged={onPlaceChanged}
       restrictions={{country: "us"}}>
        <input id='place-id' type='text'/>
      </Autocomplete>
      <Marker 
      onLoad={onRendered}
       position={position}
      ></Marker>
    </GoogleMap>
    </>   
  );
}

export default React.memo(GoogleMaps)



 {/* <OverlayView
      onLoad={(map)=>deckOverlay.setMap(map)}>
    </OverlayView> */}