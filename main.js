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
