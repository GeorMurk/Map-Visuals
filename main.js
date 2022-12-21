mapboxgl.accessToken =
  "pk.eyJ1IjoibXVya3kiLCJhIjoiY2tvMTdsODM3MDV3dDMyb2VrNGJzMTl4dCJ9.-iaLxmNqNcVaQXmtnxpP3w";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/murky/clbva7cml000415ldum09l5lf",
  center: [38.05447, 0.2047],
  zoom: 5.8,
});

// fetch("path/to/data.csv")
//   .then((response) => response.text())
//   .then((data) => {
//     var parsedData = Papa.parse(data, {
//       header: true,
//     });
//     var coordinates = parsedData.data.map((point) => [
//       point.longitude,
//       point.latitude,
//     ]);
//   });

locations.forEach(function (location) {
  var marker = new mapboxgl.Marker()
    .setLngLat([location.longitude, location.latitude])
    .addTo(map);
});
var bounds = locations.reduce(function (bounds, location) {
  return bounds.extend([location.longitude, location.latitude]);
}, new mapboxgl.LngLatBounds(locations[0], locations[0]));

map.fitBounds(bounds, {
  padding: 20,
});
