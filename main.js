mapboxgl.accessToken =
  "pk.eyJ1IjoibXVya3kiLCJhIjoiY2xkeTRhZDZ5MDh4MDNxbzd1Zjk2eWN1aCJ9.RT5-9Y9H_u16JWuXouE5vg";
var map = new mapboxgl.Map({
  container: "blank_map",
  style: "mapbox://styles/murky/clbv454x9006s14o9jfiwup1k",
  center: [38.05447, 0.2047],
  zoom: 5.8,
  minZoom: 5.8,
  // maxZoom: 7.3,
});

// Schools

map.on("load", () => {
  map.addSource("schools", {
    type: "geojson",
    data: "data/schools.geojson",
  });

  map.addLayer({
    id: "schools-layer",
    type: "circle",
    source: "schools",
    // layout: { visibility: "visible" },
    paint: {
      "circle-radius": 4,
      "circle-stroke-width": 0.5,
      "circle-color": "brown",
      "circle-stroke-color": "white",
    },
  });
});

// FSP Agents

map.on("load", () => {
  map.addSource("agents", {
    type: "geojson",
    data: "data/agents.geojson",
  });

  map.addLayer({
    id: "agents-layer",
    type: "circle",
    source: "agents",
    // layout: { visibility: "visible" },
    paint: {
      "circle-radius": 4,
      "circle-stroke-width": 0.5,
      "circle-color": "green",
      "circle-stroke-color": "white",
    },
  });
});

// Markets

map.on("load", () => {
  map.addSource("markets", {
    type: "geojson",
    data: "data/KAMIS_MAP_1/Other_Markets.geojson",
  });

  map.addLayer({
    id: "markets-layer",
    type: "circle",
    source: "markets",
    paint: {
      "circle-radius": 4,
      "circle-stroke-width": 0.5,
      "circle-color": "blue",
      "circle-stroke-color": "white",
    },
  });
});

/////// Test ///////

// map.on("load", () => {
//   map.addSource("schools", {
//     type: "geojson",
//     data: "data/schools.geojson",
//     cluster: true,
//     clusterMaxZoom: 14,
//     clusterRadius: 50,
//   });

//   map.addLayer({
//     id: "clusters",
//     type: "circle",
//     source: "schools",
//     filter: ["has", "LEVEL"],
//     paint: {
//       "circle-radius": [
//         "step",
//         ["get", "LEVEL"],
//         "Primary",
//         "#51bbd6",
//         "Secondary",
//         "red",
//       ],
//       "circle-color": ["step", ["get", "LEVEL"]],
//     },
//   });
//   map.addLayer({
//     id: "cluster-count",
//     type: "symbol",
//     source: "schools",
//     filter: ["has", "LEVEL"],
//     layout: {
//       "text-field": ["get", "point_count_abbreviated"],
//       "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
//       "text-size": 12,
//     },
//   });
//   map.addLayer({
//     id: "unclustered-point",
//     type: "circle",
//     source: "schools",
//     filter: ["!", ["has", "LEVEL"]],
//     paint: {
//       "circle-color": "#11b4da",
//       "circle-radius": 4,
//       "circle-stroke-width": 1,
//       "circle-stroke-color": "#fff",
//     },
//   });
//   map.on("click", "clusters", (e) => {
//     const features = map.queryRenderedFeatures(e.point, {
//       layers: ["clusters"],
//     });
//     const clusterId = features[0].properties.cluster_id;
//     map.getSource("schools").getClusterExpansionZoom(clusterId, (err, zoom) => {
//       if (err) return;
//       map.easeTo({
//         center: features[0].geometry.coordinates,
//         zoom: zoom,
//       });
//     });
//   });
//   map.on("click", "unclustered-point", (e) => {
//     const coordinates = e.features[0].geometry.coordinates.slice();
//     const LEVEL = e.features[0].properties.LEVEL;
//     const Status = e.features[0].properties.Status === "Public" ? "yes" : "no";
//     while (Math.abs(e.lnglat.lng - coordinates[0]) > 180) {
//       coordinates[0] += e.lnglat.lng > coordinates[0] ? 360 : -360;
//     }
//     new mapboxgl.Popup()
//       .setLngLat(coordinates)
//       .setHTML(`code: ${LEVEL}<br>What the school type?: ${Status}`)
//       .addTo(map);
//   });
//   map.on("mouseenter", "clusters", () => {
//     map.getCanvas().style.cursor = "pointer";
//   });
//   map.on("mouseleave", "clusters", () => {
//     map.getCanvas().style.cursor = "";
//   });
// });
