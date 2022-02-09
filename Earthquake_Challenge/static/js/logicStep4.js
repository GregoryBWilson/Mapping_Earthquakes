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
// let map = L.map('mapid').setView([30, 30], 3);

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
// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// // We create the tile layer that will be the background of our map.
// // let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// We create the light view tile layer that will be an option for our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });


// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the light view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
// let baseMaps = {
//   "Day Navigation": light,
//   "Night Navigation": dark
// };

let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets, 
 };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

///////////////////////// Title Layer Method End ////////////////////////////////////



// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/GregoryBWilson/Mapping_Earthquakes/main/majorAirports.json";

//////////////////////// d3.json() Method Start ///////////////////////////////////

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });

//////////////////////// d3.json() Method End ///////////////////////////////////
//////////////////////// d3.json() Method Start ///////////////////////////////////
// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {L.geoJSON(data, {
//   onEachFeature: function(_feature, layer) {
//     console.log(`_feature = `,_feature);
//     console.log(`layer = `,layer);
//     return layer.bindPopup("<h2>Airport code: " + _feature.properties.faa + "</h2><hr><h2>Airport Name: " + _feature.properties.name + "</h2>");
//     // alt: "10"
//     // city: "Shanghai"
//     // country: "China"
//     // dst: "U"
//     // faa: "SHA"
//     // icao: "ZSSS"
//     // id: "3391"
//     // name: "Shanghai Hongqiao International Airport"
//     // tz: "Asia/Shanghai"
//     // tz-offset: "8" + "</h2>"
    
// }
// }).addTo(map);
// })
//////////////////////// d3.json() Method End ///////////////////////////////////

//////////////////////// d3.json() Method Start ///////////////////////////////////

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/GregoryBWilson/Mapping_Earthquakes/main/torontoRoutes.json";
// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data).addTo(map);
// });


// // Create a style for the lines. (This should just be for the next section)
// let myStyle = {
//   color: "#ffffa1",
//   weight: 2
// }

// //////////////////////// d3.json() Method Start ///////////////////////////////////

// d3.json(torontoData).then(function(data) {L.geoJSON(data, {
//   style: myStyle,
//   onEachFeature: function(_feature, layer) {
//     console.log(`_feature = `,_feature);
//     console.log(`layer = `,layer);
//     return layer.bindPopup("<h3>Airline: " + _feature.properties.airline + "</h3><hr><h3>Destination: " + _feature.properties.dst + "</h3>");
//   // properties:
//   // airline: "DL"
//   // airline_id: "2009"
//   // codeshare: "Y"
//   // dst: "MSP"
//   // dst_id: "3858"
//   // equipment: "CRJ"
//   // src: "YYZ"
//   // src_id: "193"
//   // stops: "0"
// }
// }).addTo(map);
// })
//////////////////////// d3.json() Method End ///////////////////////////////////

//////////////////////// d3.json() Method Start ///////////////////////////////////

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/GregoryBWilson/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// // Create a style for the lines. (This should just be for the next section)- this is not right!!!
// let myStyle2 = {
//   color: "#ffffa1",
//   weight: 1
// }


// d3.json(torontoHoods).then(function(data) {L.geoJSON(data, console.log(data), {
  
//   style: myStyle2,
//   // onEachFeature: function(_feature, layer) {
//   //   console.log(`_feature = `,_feature);
//   //   console.log(`layer = `,layer);
//   //   return layer.bindPopup("<h3>Airline: " + _feature.properties.airline + "</h3><hr><h3>Destination: " + _feature.properties.dst + "</h3>");
//   // properties:
//   // airline: "DL"
//   // airline_id: "2009"
//   // codeshare: "Y"
//   // dst: "MSP"
//   // dst_id: "3858"
//   // equipment: "CRJ"
//   // src: "YYZ"
//   // src_id: "193"
//   // stops: "0"
// // }
// }).addTo(map);
// })

//////////////////////// d3.json() Method End ///////////////////////////////////
  // Create the earthquake layer for our map.
  let earthquakes = new L.layerGroup();

  // We define an object that contains the overlays.
  // This overlay will be visible all the time.
  let overlays = {
      Earthquakes: earthquakes
    };
  
    // Then we add a control to the map that will allow the user to change
  // which layers are visible.
  L.control.layers(baseMaps, overlays).addTo(map);
//////////////////////// d3.json() Method Start ///////////////////////////////////

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    
// Creating a GeoJSON layer with the retrieved data.
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(_feature, latlng) {
                
                console.log(data);
                return L.circleMarker(latlng,styleInfo(_feature));
            },
    // We create a popup for each circleMarker to display the magnitude and
    //  location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
    layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
  }            
        }).addTo(earthquakes);

        // Then we add the earthquake layer to our map.
        earthquakes.addTo(map)
    });

// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//     // We turn each feature into a circleMarker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(data);
//         return L.circleMarker(latlng);
//       },
//     // We set the style for each circleMarker using our styleInfo function.
//   style: styleInfo,
//     // We create a popup for each circleMarker to display the magnitude and
//     //  location of the earthquake after the marker has been created and styled.
//     onEachFeature: function(feature, layer) {
//     layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
//   }
// }).addTo(map);
    
// "features": [
//   {
//   "type": "Feature",
//   "properties": {
//   "mag": 1.3,
//   "place": "6km WNW of The Geysers, CA",
//   "time": 1644280280740,
//   "updated": 1644280377517,
//   "tz": null,
//   "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc73689871",
//   "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73689871.geojson",
//   "felt": null,
//   "cdi": null,
//   "mmi": null,
//   "alert": null,
//   "status": "automatic",
//   "tsunami": 0,
//   "sig": 26,
//   "net": "nc",
//   "code": "73689871",
//   "ids": ",nc73689871,",
//   "sources": ",nc,",
//   "types": ",nearby-cities,origin,phase-data,",
//   "nst": 31,
//   "dmin": 0.006788,
//   "rms": 0.05,
//   "gap": 55,
//   "magType": "md",
//   "type": "earthquake",
//   "title": "M 1.3 - 6km WNW of The Geysers, CA"
//   },
//   "geometry": {
//   "type": "Point",
//   "coordinates": [
//   -122.8205032,
//   38.8084984,
//   1.86
//   ]
//   },
//   "id": "nc73689871"
//   },

// // This function returns the style data for each of the earthquakes we plot on
// // the map. We pass the magnitude of the earthquake into a function
// // to calculate the radius.
// function styleInfo(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: "#ffae42",
//       color: "#000000",
//       radius: getRadius(feature.properties.mag),
//       stroke: true,
//       weight: 0.5
//     };
//   }
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
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
  // This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
  // This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

