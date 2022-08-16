// import React, {useEffect, useRef, useState, useMemo} from 'react';
// // import {render} from 'react-dom';
// import {MVTLayer} from 'deck.gl';
// import {Wrapper, Status} from '@googlemaps/react-wrapper';
// import {Autocomplete} from '@react-google-maps/api';
// import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';

// // source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
// // const AIR_PORTS =
// //   'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

// // Set your Google Maps API key here or via environment variable
// const GOOGLE_MAPS_API_KEY = process.env.GoogleMapsAPIKey; // eslint-disable-line
// const GOOGLE_MAP_ID = process.env.GoogleMapsMapId; // eslint-disable-line

// const renderMap = status => {
//   if (status === Status.LOADING) return <h3>{status} ..</h3>;
//   if (status === Status.FAILURE) return <h3>{status} ...</h3>;
//   return null;
// };

// function MyMapComponent({center, zoom}) {
//   const ref = useRef();
//   const cityid = 265
//   const [map, setMap] = useState(null);
//   const overlay = useMemo(
//     () =>
//       new DeckOverlay({
//         layers: [
//             new MVTLayer({
//                 id: 'line-layer',
//                 data: `https://testing-api.zoneomics.com/tiles/zones?x={x}&y={y}&z={z}&city_id=${cityid}`,
//                 minZoom: 0,
//                 maxZoom: 23,
//                 getLineColor: [19, 180 , 192],
//                 getFillColor: [19, 180 , 192],
//               }),
//         ]
//       }),
//     []
//   );

//   useEffect(() => {
//     if (map) {
//       map.setCenter(center);
//       map.setZoom(zoom);
//       overlay.setMap(map);
//     }
//   }, [map, center, zoom, overlay]);

//   useEffect(() => {
//     const map = new window.google.maps.Map(ref.current, {
//       mapId: GOOGLE_MAP_ID
//     });
//     setMap(map);
//   }, []);
//   return (
//     <>
//       <div ref={ref} id="map" style={{height: '100vh', width: '100wh'}} />
//     </>
//   );
// }

// function Root() {
//   const center = {lat: 51.47, lng: 0.45};
//   const zoom = 5;

//   return (
//     <>
//       <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={renderMap}>
//         <MyMapComponent center={center} zoom={zoom} />
//       </Wrapper>
//     </>
//   );
// }

// /* global document */
// // render(<Root />, document.body.appendChild(document.createElement('div')));
// export default Root