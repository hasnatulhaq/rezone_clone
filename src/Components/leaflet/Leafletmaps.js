import { MapContainer, TileLayer } from 'react-leaflet';
import React, { useState, useEffect } from 'react'
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';
import 'leaflet/dist/leaflet.css'
import { Autocomplete } from '@react-google-maps/api';
import './Leaflet.css'
import L from 'leaflet'
import Mapmarker from '../../images/my-map-marker.png'
import axios from 'axios'
import YAMLFILE from '../../Yaml/all.yaml'
import { createTileUrl, initializeTangram, updateTangram, updateTangramConfig } from './codes';



function MapLeaf() {

  const [autocomplete, setAutocomplete] = useState(null)
  const [lat, setLat] = useState(40.7127753)
  const [lng, setLng] = useState(-74.0059728)
  const [map, setMap] = useState()
  const [cityId, setcityId] = useState(265);
  const [data, SetData] = useState([]);
  const [zoneCodes, setZoneCodes] = useState([]);
  const [tilesRendered, setTilesRendered] = useState(false)
  const Tangram = window.Tangram || ''
  const [tangramLayer, setTangramLayer] = useState()
  const [legend, setLegend] = useState()

  // get zoneCodes
  useEffect(()=>{
   axios.get('https://testing-api.zoneomics.com/cities/findByLatLng?lat='+lat+'&lng='+lng, )
   .then((res)=>{

     //  if(res?.data?.data)
     console.log(res.data , " cities data")
     SetData(res.data)
     setZoneCodes(res.data.data.zoneCode);
     setcityId(res.data.data.id);
    })
     
    }
,[lat,lng]);


  console.log({ tangramLayer })

  // Reset the store state and this component state when this component unmounts
  useEffect(() => {
    return () => {
    
      if (map && tangramLayer && tangramLayer.scene) {
        tangramLayer.scene.config.sources.zones.url = '';
        tangramLayer.scene.config.layers.zones.enabled = false;
        updateTangram(tangramLayer, map);
        map.removeLayer(tangramLayer);
        setTangramLayer(null);
        map.invalidateSize(true);
        map.remove();
        setMap(null);
      }
    };
  }, []);



  // Initializing tangram layer and add to map
  useEffect(() => {
    if (Tangram && map) {
      const layer = initializeTangram(YAMLFILE);
      layer.scene.subscribe({
        view_complete: () => {
          setTilesRendered(true)

        },
      });
      map.addLayer(layer);
      setTangramLayer(layer);
    }

    console.log({map})
  }, [map, Tangram]);

  const onPlaceChanged = () => {
    var places = autocomplete.getPlace()
    setLat(places.geometry.location.lat())
    setLng(places.geometry.location.lng())
  }

  const center = {
    lat,
    lng,
  };

  const position = {
    lat: lat,
    lng: lng,
  }


  var myIcon = L.icon({
    iconUrl: Mapmarker,
    iconSize: [35, 45],
  });




  useEffect(() => {

    if (map) {
      map.setView(position, 14)
      map.flyTo(position, 14)
      L.marker(position, { icon: myIcon }).addTo(map)

    }

  }, [map, position])

  
  // Update tangram layer config after cityID changes and load the zoning layer - also runs when the plu filter is reset
  useEffect(() => {
    if (
      map &&
      tangramLayer &&
      cityId
      && zoneCodes
      ) {
        
        
        const url = createTileUrl(cityId);
        console.log({zoneCodes})

      updateTangramConfig(tangramLayer, map, setLegend , {
        zoneCodes,
        url,
        alpha: 0.5, // opacity
        layer: 'zone',
      });

    }
  }, [
    cityId,

  ]);

  return (
    <>
      <div className='autocomplete'>
        <Autocomplete
          onLoad={(e) => setAutocomplete(e)}
          onPlaceChanged={onPlaceChanged}
          restrictions={{ country: "us" }}>
          <input id='place-id' type='text' />
        </Autocomplete>
      </div>
      <MapContainer ref={setMap}  center={center} zoom={10} scrollWheelZoom={false} style={{ width: '100%', height: '100vh' }}>
        {/* <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url= {mvttiles}
    /> */}
        <ReactLeafletGoogleLayer apiKey='AIzaSyAVLV4uAMtBWYX5QCbAhiFPZeQ37R6zyxw'>
        </ReactLeafletGoogleLayer>
      </MapContainer>
    </>
  );
}

export default MapLeaf