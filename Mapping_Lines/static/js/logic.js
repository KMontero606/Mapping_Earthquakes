// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
//let line = [
    //[33.9416, -118.4085],
    //[37.6213, -122.3790],
    //[40.7899, -111.9791],
    //[47.4502, -122.3088]
//];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
    //color: "yellow"
//}).addTo(map);

// Skill Drill
// Edit your logic.js to create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops:
// Austin-Bergstrom International Airport (AUS)
// Toronto Pearson International Airport (YYZ)
// Make the route a blue dashed line
// with a weight of 4
// opacity of 0.5 on the light map
// Hint: You'll need to find the coordinates for some of these airports
// Bonus: Add your city or another city as a stopping point
let line = [
    [37.6213, -122.3790],
    [38.6213, -121.5901],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

L.polyline(line, {
    color: "blue",
    lineweight: 4,
    dashArray: '5, 5',
    opacity: 0.5,
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);