// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//let marker = L.circle([34.0522, -118.2437], {
    //radius: 100
//}).addTo(map);

// Skill Drill
// Using the Leaflet documentation, create a light-yellow circle with black lines indicating a 300-meter readius of Central Los Angeles on a dark map.
// To get the correct map style, replace the "streets-v11" in the tileLayer() code with "dark-v10" in the url.
let marker = L.circle([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1',
    radius: 300
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'dark' tile layer to the map with "dark-v10".
streets.addTo(map);