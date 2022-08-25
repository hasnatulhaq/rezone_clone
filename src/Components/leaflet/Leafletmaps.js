import { MapContainer, Popup , Marker} from 'react-leaflet';
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import 'leaflet/dist/leaflet.css'

function MapLeaf() {
   
  return (
   
   <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{width:'100%' , height:'100vh'}}  >
   <ReactLeafletGoogleLayer   apiKey='AIzaSyAVLV4uAMtBWYX5QCbAhiFPZeQ37R6zyxw' type={'satellite'} />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>      
    
  );
}


export default MapLeaf