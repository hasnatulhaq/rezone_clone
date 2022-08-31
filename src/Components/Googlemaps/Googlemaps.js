import React, {useEffect, useState } from 'react'
import './Googlemaps.css'
import { GoogleMap, useJsApiLoader , Autocomplete, Marker} from '@react-google-maps/api';

import { GoogleMapsOverlay } from "@deck.gl/google-maps";
import { MVTLayer} from "deck.gl";
import { staticColor } from "../../Color.js";
import hexToRgb from 'hex-to-rgb';

const containerStyle = {
  width: '100%',
  height: '900px',
};

function GoogleMaps() {

  const [autocomplete, setAutocomplete] = useState(null)
  const [lat , setLat] = useState(40.750183)
  const [lng , setLng]  = useState(-73.983759)
  const [zone, SetZone] = useState([]);
  const [Cityid ,SetCityId] = useState();
  const [colors, setColors] = useState();
  const [map, setMap] = useState(null);
  const [data, SetData] = useState([]);
 
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
    //  if(res?.data?.data)
             console.log(res.data , " cities data")
             SetData(res.data)
             SetZone(res.data.data.zoneCode);
             SetCityId(res.data.data.id);
      }catch(error){
           console.log("Not found any zone data",error);
      }
    }
    getData()
},[lat,lng]);

useEffect(() => {
  setColors(staticColor);
}, []);


// var hexToRgb = require('hex-to-rgb');
 

// const matchcolors = () => {
//   const matchExpression = ["match", ["get", "z"]];
//   for (let row = 0; row < zone.length; row++) {
//     const color = colors[row];
//     const rgbcolors = hexToRgb(color)
//     matchExpression.push(zone[row], rgbcolors);
//   }
//   matchExpression.push("white"); 
//   return mat
// };


// function getcolors(()=>{
//   let newarr=colors[0]
//   newarr = hexToRgb(newarr)
//   colors.shift()
//   return newarr
// });

//  getcolors(() => {
 
// }, []);


// const getcolors = () => {
//   let newarr=colors[0]
//   newarr = hexToRgb(newarr)
//   return newarr
// };

// const TEXT_DATA = [
//   {
//     text: 'this is on map text layer',
//     position: [	-122.143936, 37.468319],
//     color: [255, 0, 0]
//   },
//   {
//     text  : 'world',
//     position: [-122.5, 37.8],
//   },
// ];

console.log(data , " all data ")
  //  let values = 10;
  const deckOverlay = new GoogleMapsOverlay({
    layers: [
      new MVTLayer({
        id : "mvtlayer",
        data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=${Cityid}`,
        minZoom: 10,
        maxZoom: 23,
        getLineColor: [19, 18 , 192],
        getFillColor: d=>{
         let newarr=colors[0]
          newarr = hexToRgb(newarr)
          colors.shift()
          return newarr
        },
          // let newarr=colors[0]
          // newarr = hexToRgb(newarr)
          // colors.shift()
          // return newarr
        getLineWidth: 1,
        opacity: 0.2,
      }),
      // new TextLayer({
      //   id: 'text-layer',
      //   data : 'http://tiles.mapillary.com/maps/vtp/mly1_public/2/{z}/{x}/{y}?access_token=MLY|4142433049200173|72206abe5035850d6743b23a49c41333',
      //   // data : 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json',
      //   // zone,
      //   pickable: true,
      //   //  getPosition: d => d.coordinates,
      //   getText: d =>{
      //     console.log(d)
      //   },
      //   getSize: 16,
      //   getAngle: 0,
      //   getTextAnchor: 'middle',
      //   getAlignmentBaseline: 'center'
      // })
    ]
  }); 
  console.log(deckOverlay , " mvt and text layer")
  deckOverlay.setMap(map)

  
  return (
    <>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
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



 