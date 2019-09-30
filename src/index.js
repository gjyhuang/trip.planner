import { createMarker } from './marker';
import { create } from 'domain';

const mapboxgl = require('mapbox-gl');
console.log('hello world!');

mapboxgl.accessToken =
  'pk.eyJ1IjoibWlrZW1jbWFudXM5NSIsImEiOiJjazE2a3B5bDIxNndtM2JxZHlqd3dsaGVmIn0.ByXXLsR1KuIYykrDkN9n3Q';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const marker = createMarker('restaurant', [-74.009151, 40.705086]);
marker.addTo(map);

// const marker = document.createElement('div');

// new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map);

// let marker = new mapboxgl.Marker().setLngLat([-74.009, 40.705]).addTo(map);
