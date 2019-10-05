/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGlveDIwMTIiLCJhIjoiY2swdTJyMXRyMGk5bjNncDZvd3I2N3h5ZSJ9.zCwRR6_f0-TrhU7JK0CWow';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/liox2012/ck0u2to0c1gty1cqjl877dv2q',
    scrollZoom: false
    //   center: [-118.113491, 34.111745],
    //   zoom: 7,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.dat}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
