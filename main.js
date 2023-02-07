mapboxgl.accessToken =
  "pk.eyJ1IjoibXVya3kiLCJhIjoiY2tvMTdsODM3MDV3dDMyb2VrNGJzMTl4dCJ9.-iaLxmNqNcVaQXmtnxpP3w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/murky/clbva7cml000415ldum09l5lf",
  center: [38.05447, 0.2047],
  zoom: 5.8,
});

map.on("load", function () {
  map.addSource("mobilemoney", {
    type: "geojson",
    data: "data/agents.geojson",
  });
});

map.on("load", function () {
  map.addLayer({
    id: "mobilemoney",
    type: "symbol",
    source: "mobilemoney",
    layout: {
      "icon-image": "{icon}-15",
      "icon-allow-overlap": true,
    },
  });
});
