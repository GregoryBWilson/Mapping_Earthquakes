// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// California center
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// USA Centre
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// let map = L.map('mapid').setView([36.1722, -120.1794], 7);
// Create the map object with center at the San Francisco airport. For Lines
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Create the map object with center at the San Francisco airport. For GeoJSON
// let map = L.map('mapid').setView([37.5, -122.5], 10);
// Create the map object with center and zoom level. For GeoJSON in repo
let map = L.map('mapid').setView([30, 30], 3);

// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
//     }).addTo(map);

// // Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location)
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {radius:city.population/100000})
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });

// // Coordinates for each point to be used in the line.
// // Coordinates for each point to be used in the polyline.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);




// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// The following Mapbox styles are available to all accounts using a valid access token:
// id = 'mapbox/streets-v11'
// id = 'mapbox/outdoors-v11'
// id = 'mapbox/light-v10'
// id = 'mapbox/dark-v10'
// id = 'mapbox/satellite-v9'
// id = 'mapbox/satellite-streets-v11'
///////////////////////// GeoJSON Layer Start //////////////////////////////////////////
// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};
// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(_feature, layer) {
//     console.log(layer);
//     layer.bindPopup();
// }
// }).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }

// }).addTo(map);

///////////////////////// GeoJSON Layer End //////////////////////////////////////////

///////////////////////// Title Layer Method Start ////////////////////////////////////
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

///////////////////////// Title Layer Method End ////////////////////////////////////



// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/GregoryBWilson/Mapping_Earthquakes/main/majorAirports.json";

//////////////////////// d3.json() Method Start ///////////////////////////////////

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});

//////////////////////// d3.json() Method End ///////////////////////////////////
// GeoJSON.js:221 Uncaught Error: Invalid GeoJSON object. see line 169//

// Grabbing our GeoJSON data.
L.geoJSON(airportData, {
  onEachFeature: function(_feature, layer) {
    // console.log(`_feature = `,_feature);
    // console.log(`layer = `,layer);
    layer.bindPopup();
}
}).addTo(map);