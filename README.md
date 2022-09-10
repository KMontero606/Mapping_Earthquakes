# Mapping_Earthquakes

## Overview of Project:
Basil and Sadhana like how you created your earthquake map with two different maps and the earthquake overlay. Now, Basil and Sadhana would like to see the earthquake data in relation to the tectonic plates’ location on the earth, and they would like to see all the earthquakes with a magnitude greater than 4.5 on the map, and they would like to see the data on a third map.

## Results:
### Deliverable 1: Add Tectonic Plate Data
```
// Deliverable 1: Create a Horizontal Bar Chart
// D1-1. Add a 2nd layer group for the tectonic plate data.
let allEarthquakes = new L.LayerGroup();
let tectonicPlate = new L.LayerGroup();
// D1-2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "Tectonic Plates": tectonicPlate,
  "Earthquakes": allEarthquakes,
  "Major Earthquake": majorEarthquake
};
// D1-3. Use d3.json to make a call to get our Tectonic Plate geoJSON data.  d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function(data) {
    // Pass the tectonic plate data to the geoJSON() layer.
    L.geoJson(data, {
      // Style the lines with a color and weight that will make it stand out on all maps
      color: "#9F2B68",
      weight: 2
    // Add the tectonic layer group variable you created in Step 1 to the map, 
    // i.e., .addTo(tectonicPlates) and close the geoJSON() layer.
    }).addTo(tectonicPlate);
  // Next, add the tectonic layer group variable to the map,
  // i.e, tectonicPlates.addTo(map)  
  tectonicPlate.addTo(map);
  });
```

### Deliverable 2: Add Major Earthquake Data
```
// D2-1. Add a 3rd layer group for the major earthquake data.
let majorEarthquake = new L.LayerGroup();
// D2-2. Add a reference to the major earthquake data overlay object.
let overlays = {
  "Tectonic Plates": tectonicPlate,
  "Earthquakes": allEarthquakes,
  "Major Earthquake": majorEarthquake // major earthquake overlay
};
// D2-3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week.
  d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson").then(function(data) {
    // D2-4. Use the same style as the earthquake data.
    function styleInfo(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: getColor(feature.properties.mag),
        color: "#000000",
        radius: getRadius(feature.properties.mag),
        stroke: true,
        weight: 0.5
      };
    }  
  
    // D2-5. Change the color function to use three colors for the major earthquakes based on the magnitude of the earthquake.
    function getColor(magnitude) {
      if (magnitude > 5) {
        return "#ea2c2c";
      }
      if (magnitude > 4) {
        return "#ea822c";
      }
      return "#98ee00";
    }
  
    // D2-6. Use the function that determines the radius of the earthquake marker based on its magnitude.
    function getRadius(magnitude) {
      if (magnitude === 0) {
        return 1;
      }
      return magnitude * 4;
    }
  
  // D2-7. Creating a GeoJSON layer with the retrieved data that adds a circle to the map 
  // sets the style of the circle, and displays the magnitude and location of the earthquake
  //  after the marker has been created and styled.
  L.geoJson(data, {
    // Turn each feature into a circleMarker on the map
      pointToLayer: function(feature, latlng) {
          console.log(data);
          return L.circleMarker(latlng);
        },
    // Style each circle with styleInfo() function
    style: styleInfo(),
    // Create a popup for the circle to display the magnitude and location of the earthquake
    onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
    // Add the major earthquake layer group variable you created in Step 1 to the map,
    // i.e, .addTo(majorEQ) and then close the geoJSON() layer  
  }).addTo(majorEarthquake);
  // 8. Add the major earthquakes layer to the map.
  majorEarthquake.addTo(map);
  // 9. Close the braces and parentheses for the major earthquake data.
  });
```
### Deliverable 3: Add an Additional Map
```
// Deliverable 3: Add an Additional Map.
    // Using the options from the Mapbox styles, add a third map style as a tile layer object to the challenge_logic.js file.
let naviNight = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Create a base layer that holds all three maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Navigation Night": naviNight
};
```

## Summary:
When the index.html is deployed, the earthquake default map is rendered with the following image:

<img width="1127" alt="image" src="https://user-images.githubusercontent.com/106962921/189461595-a98075d9-ecc4-4fd4-80b4-1b7e0f3e0bb0.png">

Toggling to the Major Earthquake map renders the following map with earthquakes magnitude greater than 4.5:

<img width="1126" alt="image" src="https://user-images.githubusercontent.com/106962921/189461749-7c87b27b-a5dc-4b55-ba58-82b6a6f96419.png">

A third base map is added, ‘Navigation Night’, to render the map with an alternative map template:

<img width="1126" alt="image" src="https://user-images.githubusercontent.com/106962921/189461768-ae46c736-3ccf-414f-b754-df41a66e263f.png">
