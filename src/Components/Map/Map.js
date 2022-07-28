import './Map.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import ReactMapGl, {NavigationControl} from "react-map-gl";
// import Geocoder from "../Geocoder/Geocoder"
import { useState } from 'react';
import {FaAngleDown } from 'react-icons/fa';

const MAPBOX_TOKEN = "pk.eyJ1IjoiaGFzbmF0dWxoYXEiLCJhIjoiY2wwdzBjb3JrMTc3ajNkbjUyaDljbG8zcyJ9.zR9o-L0WGPt1JKTHd0oUFg";

function Map(){

  const [viewport, setviewport] = useState({
    longitude: -95.712891,
    latitude: 37.09024,
    zoom: 3,
    width: window.innerWidth,
    height: window.innerHeight,
    isDragging: false,
  });

    return(
        <>
        <div className='map-topbar'>
          <div>
              <input type="text" placeholder='Search property' className='google-search'/>
          </div>
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
           <div><FaAngleDown/> </div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
           <div><FaAngleDown/></div>
         </div>

         <div className='legend'>
              <p>legend</p>
         </div>
        <ReactMapGl
        width="100vw"
        height="100vh"
        style={{ borderTop: "5px solid #245c7c" }}
        mapStyle={"mapbox://styles/hasnatulhaq/cl1kc4e5o00my14o3kuifx4vp"}
        mapboxAccessToken={MAPBOX_TOKEN}
        {...viewport}
        onMove={(evt) => setviewport(evt.viewport)}
        // onClick={displaydata}
      >
            {/* <Geocoder
          mapboxAccessToken={MAPBOX_TOKEN}
          position="top-left"
          // setdata={setData}
          zoom={17}
          countries="us,ca"
          placeholder="Search e.g New york"
          width="100%"
          height="100%"
        /> */}
         <NavigationControl position='top-left' />
      </ReactMapGl>
        </>
    )
}


export default Map