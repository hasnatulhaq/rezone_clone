import './Map.css'
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import ReactMapGl, {NavigationControl} from "react-map-gl";
import Geocoder from "../Geocoder/Geocoder"

const MAPBOX_TOKEN = "pk.eyJ1IjoiaGFzbmF0dWxoYXEiLCJhIjoiY2wwdzBjb3JrMTc3ajNkbjUyaDljbG8zcyJ9.zR9o-L0WGPt1JKTHd0oUFg";

function Map(){
    return(
        <>
        <div className='map-topbar'>
         <div className='map-zonefilter'>
           Zone Filter
         </div>
         <div className='map-zonefilter'>
           Protected use
         </div>
         <div className='map-zonefilter'>
           overlays
         </div>
         </div>
        <ReactMapGl
        width="100vw"
        height="100vh"
        style={{ borderTop: "5px solid #245c7c" }}
        mapStyle={"mapbox://styles/hasnatulhaq/cl1kc4e5o00my14o3kuifx4vp"}
        mapboxAccessToken={MAPBOX_TOKEN}
        // {...viewport}
        // onMove={(evt) => setviewport(evt.viewport)}
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
         <NavigationControl />
      </ReactMapGl>
        </>
    )
}


export default Map