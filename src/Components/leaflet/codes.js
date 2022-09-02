// / eslint-disable no-param-reassign /
// import {
//   openFeatureSelection,
//   setFeatureTrayAddress,
//   setLegend,
//   setMapLatLng,
// } from '../redux/reducers/zoneomicsMapSlice';
import {colors} from '../../Color';

const initializeTangram = (baseUrl) => {
  return window.Tangram.leafletLayer({
    scene: baseUrl || '',
    modifyScrollWheel: false,
    introspection: false,
    modifyZoomBehavior: false,
    webGLContextOptions: {
      // explicitly add/override WebGL context options
      preserveDrawingBuffer: true,
    },
    attribution: '',
    sceneBasePath: 'https://testing-api.zoneomics.com/',
    events: {
      hover: (selection) => {
        if (selection.feature) {
          // set the 'cursor' css property of the map element to 'pointer' - if the selection is true
          // jQuery('.map-container').css('cursor', 'pointer !important');
        } else {
          // set the 'cursor' css property of the map element to 'webkit-grab'
          // jQuery('.map-container').css('cursor', 'webkit-grab');
        }
      },
    },
    selectionRadius: 20,
  });
};

// /**
//  *
//  * @param {object} config - the config object has the following structure
//  * - name - current active layer name
//  * - overlayData - changes based on overlay -
//  * - For zoning layer it is {cityID},
//  * - For zoning layer with plu filter active it is {cityID, plu, currentSelected},
//  * - For other overlays it is {overlayID}
//  * @returns {string} url
//  */
const createTileUrl = (cityID) => {
  const url = 'https://testing-api.zoneomics.com/api';
  return url.concat(
    `/tiles/zones?x={x}&y={y}&z={z}&city_id=${cityID}`
  );
    // If the overlay data is for the plu filter
   
    // If the overlay data is for the parcel filter
   
    // Overlay data for the default case
   
  // other overlay layer is active
  
};

const hexToRgb = (hex) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));

const createLegend = (zoneCases) =>
// console.log({zoneCases})
zoneCases.map((zone, idx) => {
    return {
      key: zone,
      color: colors[idx],
    };
  });

const createLegendFn = (legend, alpha) => {
  const legendArr = alpha
    ? legend.map(({ key, color }) => ({
        key,
        color: `rgba(${hexToRgb(color).toString()},${alpha})`,
      }))
    : legend;

  const legendConfig = legendArr
    .reduce((acc, el) => {
      return acc.concat(`"${el.key}": "${el.color}",`);
    }, '{')
    .concat('}');

  const fn = `
    function() {
      var config = ${legendConfig};
      if(config[feature.z]){
        return config[feature.z];
      }
      return '#000'
    }
  `;
  return fn;
};

// /**
//  * Calls the update method on the tangram layer scene
//  * @param {object} tangramLayer
//  * @param {object} map
//  */
const updateTangram = (tangramLayer, map) => {
  tangramLayer.scene.updateConfig();
  tangramLayer.scene.immediateRedraw();
  // map.invalidateSize(true);
};

// /**
//  * Updates the tangram scene config and updates the scene
//  * @param {object} tangramLayer - tangram layer ref
//  * @param {object} map - leaflet map ref
//  * @param {function} dispatch - redux dispatch function
//  * @param {object} config - the config for the tangram layer - url, zoneCodes, alpha
//  */
const updateTangramConfig = (tangramLayer, map, setLegend, config) => {
  const legendArr = createLegend(config.zoneCodes);
  const legendFn = createLegendFn(legendArr, config.alpha);
setLegend({ legendArr });
  // if (config.layer === 'overlay') {
  //   tangramLayer.scene.config.sources.overLays.url = config.url;
  //   tangramLayer.scene.config.layers.overLays.draw.c_polygon.color = legendFn;
  //   tangramLayer.scene.config.layers.zones.enabled = false;
  //   tangramLayer.scene.config.layers.overLays.enabled = true;
  // } else {
  //   tangramLayer.scene.config.layers.overLays.enabled = false;
  //   tangramLayer.scene.config.sources.zones.url = config.url;
    tangramLayer.scene.config.layers.zones.draw.c_polygon.color = legendFn;
    tangramLayer.scene.config.layers.zones.enabled = true;
  // }
  return updateTangram(tangramLayer, map);
};

// const createProspectCircles = (
//   prospectData,
//   prospectPointFeatureGroup,
//   dispatch
// ) => {
//   prospectData.forEach(({ lat, lng, address }) => {
//     const circle = L.circle([lat, lng], 4, {
//       fillColor: '#DD0F0F',
//       stroke: false,
//       fillOpacity: 0.8,
//       color: '#DD0F0F',
//     });
//     circle.on('click', () => {
//       dispatch(setMapLatLng({ lat, lng }));
//       dispatch(setFeatureTrayAddress({ address }));
//       dispatch(openFeatureSelection());
//     });
//     circle.addTo(prospectPointFeatureGroup.current);
//   });
// };

export {
  initializeTangram,
  createTileUrl,
  // createLegend,  
  // createLegendFn,
  updateTangramConfig,
  updateTangram,
  // createProspectCircles,
};