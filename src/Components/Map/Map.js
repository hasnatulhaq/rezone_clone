import './Map.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import {NavigationControl,Map,MapProvider} from "react-map-gl";
import Geocoder from "../Geocoder/Geocoder"
// import {useEffect, useState ,useRef, useCallback} from 'react';
import {useState} from 'react';
import {FaAngleDown } from 'react-icons/fa';
// import {Autocomplete} from '@react-google-maps/api'
// import { useForm } from "react-hook-form";
// import axios from 'axios';



const MAPBOX_TOKEN = "pk.eyJ1IjoiaGFzbmF0dWxoYXEiLCJhIjoiY2wwdzBjb3JrMTc3ajNkbjUyaDljbG8zcyJ9.zR9o-L0WGPt1JKTHd0oUFg";

function MapS(){

  const [viewport, setviewport] = useState({
    longitude: -73.983759,
    latitude: 40.750183,
    zoom: 12,
    width: window.innerWidth,
    height: window.innerHeight,
    isDragging: false,
  });

    return(
        <>
        <div className='map-topbar'>
         <div className='map-zonefilter'>
           Zone Filter <FaAngleDown/>
           <div className='drop-down'>
                 filter
           </div>
         </div>
         <div className='map-zonefilter'>
           Protected use  <FaAngleDown/>
           <div className='drop-down'>
                 filter
           </div>
         </div>
         <div className='map-zonefilter'>
           overlays <FaAngleDown/>
           <div className='drop-down'>
                 filter
           </div>
         </div>
         </div>
         <div className="under-topnavbar">
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
         </div>
         {/* <div className='legend'>
              <p>legend</p>
         </div> */}
         <MapProvider>
        <Map
        // id='1'
        // ref={mapRef}
        width="100vw"
        height="100vh"
        style={{ borderTop: "5px solid #245c7c" }}
        mapStyle={"mapbox://styles/hasnatulhaq/cl1kc4e5o00my14o3kuifx4vp"}
        mapboxAccessToken={MAPBOX_TOKEN}
        {...viewport}
        onMove={(evt) => setviewport(evt.viewport)}
        // onClick={displaydata}
      >
            <Geocoder
          mapboxAccessToken={MAPBOX_TOKEN}
          position="top-left"
          // setdata={setData}
          zoom={17}
          countries="us,ca"
          placeholder="Search e.g New york"
          width="100%"
          height="100%"
        />
        <div>
        <NavigationControl position='top-left' />
        </div>
      </Map>
      </MapProvider>
        </>
    )
}


export default MapS






  // const {register} = useForm();
  // const [place, setPlace] = useState('')
  // const [lat, setLat] = useState();
  // const [lng, setLng] = useState()
  // const mapRef = useRef();
  // const onSelectCity = useCallback((longitude, latitude) => {
  //   mapRef.current?.flyTo({center: [longitude, latitude], duration: 2000});
  // }, []);

  // useEffect(()=>{ 
  //   if(lat!== '' || lng !==''){
  //     onSelectCity(lng,lat)
  //     setLat('');
  //     setLng('')
  //   }
  // },[lat,lng])

 

  // useEffect(()=>{
  //  if(place!== ''){
  //    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${MAPBOX_TOKEN}`).then(({data})=>{
  //     console.log([data.features[0].center[0], data.features[0].center[1]])
  //     setLat(data.features[0].center[1])
  //     setLng(data.features[0].center[0])
  //   }).catch(err=>console.error(err))
  //  }
  // },[place])