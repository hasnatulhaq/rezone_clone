import React, {useEffect, useState } from 'react'
import './Googlemaps.css'
import { GoogleMap, useJsApiLoader , Autocomplete, Marker} from '@react-google-maps/api';
//import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';
import axios from 'axios'
import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { MVTLayer } from "deck.gl";
import { staticColor } from "../../Color.js";

const containerStyle = {
  width: '100%',
  height: '900px'
};


function GoogleMaps() {

  const [autocomplete, setAutocomplete] = useState(null)
  const [lat , setLat] = useState(40.750183)
  const [lng , setLng]  = useState(-73.983759)
  const [zone, SetZone] = useState([]);
  const [Cityid , SetCityId] = useState(265);
  const [colors, setColors] = useState();
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
    // console.log("ADDRESS ",autocomplete.getPlace())
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

  // const overlay = useMemo(
  //   () =>
  //     new GoogleMapsOverlay({
  //       layers: [
  //         new MVTLayer({
  //           data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=265`,
  //           minZoom: 0,
  //           maxZoom: 23,
  //           getLineColor: [19, 180, 192],
  //           getFillColor: [14, 130, 180],
  //         }),
  //       ]
  //     }),
  //   []
  // );
   useEffect(()=>{
         async function getData(){
           try{
            const res=await axios.get('https://testing-api.zoneomics.com/cities/findByLatLng?lat='+lat+'&lng='+lng, )
          // if(res?.data?.data)
                  console.log(res.data)
                  SetZone(res.data.data.zoneCode);
                  SetCityId(res.data.data.id);
           } catch(error){
                console.log("Not found any zone data",error);
           }
         }
         getData()
   },[lat,lng]);
  

  // const colors = 'red'
  
  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       // if (data[1] !== "") {
  //         // const res = await axios.get(
  //         //   "/cities/findByLatLng?lat=" + lat + "&lng=" + lng
  //         // );
  //         const res = axios.get('https://testing-api.zoneomics.com/cities/findByLatLng?lat=' + lat + '&lng=' + lng).then(
  //           (res)=>console.log('api',{res})
  //           )
  //         // 
  //         // console.log(res.data.data[0].zoneCode , "zone code")
  //         // setShowResults(true);
  //         // setIsOpen(true);
  //       // }
  //     } catch (e) {
  //       console.log("NOT FOUND ANY RESULT", e);
  //     }
  //   }
  //   getData();
  // }, [lat, lng]);


  // const generateColor = () => {
  //   const randomColor = Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, '0');
  //   return `#${randomColor}`;
  // };
  useEffect(() => {
    setColors(staticColor);
  }, []);

  // const matchExpression = ["match", ["get", "z"]];
  // for (let row = 0; row < zone.length; row++) {
  //   const color = colors[row];
  //   matchExpression.push(zone[row], color);
  // }
  // matchExpression.push("white");

    for ( let row = 0 ; row < zone.length ; row++){
         const color = colors[row];
        //  console.log(color)
    }


  const deckOverlay = new GoogleMapsOverlay({
    layers: [
      new MVTLayer({
        data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=${Cityid}`,
        minZoom: 0,
        maxZoom: 23,
        getLineColor: [19, 180 , 192],
        getFillColor: [20, 200 , 168],
      }),
    ]
  });


  useEffect(()=>{
    console.log({deckOverlay})
    deckOverlay.setMap(map); 
  },[Cityid])

 

  //  const overlay = deckOverlay.setMap(map);
  // useEffect(() => {
  //   if (map) {
  //     // map.setCenter(center);
  //     // map.setZoom(14);
  //     overlay.setMap(map);
  //   }
  // }, [map, center,zoom,  overlay]);

  return (
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
      onLoad={map => {

        deckOverlay.setMap(map); 
      }}
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
  );
}

export default React.memo(GoogleMaps)