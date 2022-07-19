import './Map.css'
import ReactMapGl from "react-map-gl";

const MAPBOX_TOKEN = "pk.eyJ1IjoiaGFzbmF0dWxoYXEiLCJhIjoiY2wwdzBjb3JrMTc3ajNkbjUyaDljbG8zcyJ9.zR9o-L0WGPt1JKTHd0oUFg";

function Map(){
    return(
        <>
        <ReactMapGl
        width="100vw"
        height="100vh"
        style={{ borderTop: "5px solid #245c7c" }}
        mapStyle={"mapbox://styles/hasnatulhaq/cl1kc4e5o00my14o3kuifx4vp"}
        mapboxAccessToken={MAPBOX_TOKEN}
        // {...viewport}
        // onMove={(evt) => setviewport(evt.viewport)}
        // onClick={displaydata}
      ></ReactMapGl>
        </>
    )
}


export default Map