const mapboxgl = require('mapbox-gl');

function createMarker(type, coords) {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  let icon = {
    activity: 'url(http://i.imgur.com/WbMOfMl.png)',
    hotel: 'url(http://i.imgur.com/D9574Cu.png)',
    restaurant: 'url(http://i.imgur.com/cqR6pUI.png)',
  };

  console.log('Create marker invoked!');

  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = icon[type];

  return new mapboxgl.Marker(markerDomEl).setLngLat(coords);
}

export { createMarker };
