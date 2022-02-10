# Mapping Earthquakes

## 1 Purpose

I have just landed a job as a Data Visualization Specialist at the Disaster Reporting Network(DRN), a non-profit company that provides data driven reporting on disasters around the world.  I have been tasked with building insightful visualizations with interactive features on earthquakes from around the world.  I support website and mobile application development using the latest GeoJSON data from the US Geological Survey.  Using JavaScript, D3, Leaflet and MapBox, I have plotted the data in various layers for use by the DRN team members.

## 2 Results

The application has been developed in three step that are described in the following sections:

- 2.1 Add Tectonic Plate Data
- 2.2 Major Earthquake Data
- 2.3 an Additional Map

The corresponding HTML and JavaScript files for each step has been saved in the repository as:

- index_D1.html and challenge_logic_D1.js
- index_D2.html and challenge_logic_D2.js
- index.html and challenge_logic.js

### 2.1: Add Tectonic Plate Data

Using JavaScript, Leaflet.js, and geoJSON data, I added tectonic plate data using d3.json().  I also added the data using a geoJSON() layer, and set the tectonic plate LineString data to stand out on the map.  Tectonic plate data was also add to the overlay object with the earthquake data.

In figure 1 below you can see that.

- The tectonic plate data was added to the layer group. 

- The tectonic plate data was added to the overlay object. 

- The tectonic plate data was added to the map, and the fault lines are styled. 
  - The tectonic plate data was passed to the geoJSON() layer
  - The geoJSON() layer adds color and width to the tectonic plate lines
  - The tectonic layer group variable is added to the map
- The earthquake data and tectonic plate data are displayed when the page loads.


![ All earthquake data  and  tectonic plate data on the map](/Resources/1-all-earthquake-data-tectonic-plate-data-on-map.png "Figure 1 - All Earthquake Data Tectonic Plate Data on Map")

***Figure 1 - All Earthquake Data Tectonic Plate Data on Map***

### 2.2: Add Major Earthquake Data

Using  JavaScript, Leaflet.js, and geoJSON data, I added major earthquake data to the map using d3.json(). I also added color and set the radius of the circle markers based on the magnitude of earthquake.   A popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer, geoJSON() was also added.

As can be seen in figure 2 below:

- The major earthquake data was added as a third layer group.

- The major earthquake data was added to the overlay object. 

- ALL the earthquake data and tectonic plate data are displayed when the page loads.

There was some confusion above the Major Earthquake popups, in the instructions and in the requirements it states that ther should be popups so I included them as in the code fence below.

```javascript
     onEachFeature: function(feature, layer) {
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(majorEarthquakes);
```

I the Module 13 Rubric, however, it states "The major earthquake data is added to the map and styled, but there are no popup markers." so in the code field below you can see commenting out the .bindPopup will suppress this feature if so desired (I personally really like the Popups).

```javascript
     onEachFeature: function(feature, layer) {
      // layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(majorEarthquakes);
```

![All earthquakes, major earthquakes, and tectonic plate data on the map](/Resources/2-earthquakes-major-earthquakes-tectonic-plate-data-on-the-map.png "Figure 2 - Earthquakes Major Earthquakes Tectonic Plate Data on the Map")

***Figure 2 - Earthquakes Major Earthquakes Tectonic Plate Data on the Map***



The d3.json() callback works and does the following: 

- Sets the color and diameter of each earthquake.
- The major earthquake data is passed to the geoJSON() layer.
- The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
- The major earthquake layer group variable is added to the map

All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off.

### 2.3: Add an Additional Map

Using  JavaScript and Leaflet.js I added a third map style to your earthquake map.

In figure 3 below you can see:

- A third map tile layer was created. 

- The third map was added to the overlay object. 

- ALL the earthquake data and tectonic plate data are displayed on all maps on the webpage.




Using  Mapbox styles I added a third map style "Dark" as a tile layer object to the challenge_logic.js  file as in the code fence below.

```javascript
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
```

This third map was added as a variable to the base layer object.

```javascript
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets,
  "Dark": dark
};
```

Starting my Python server I launched the index.html file and confirmed that my map was working.  In figure 3 there are three map styles, and displays the two earthquake data sets and the tectonic plate data.

![All earthquakes, major earthquakes, and tectonic plate data on the map with three map style options](/Resources/3-three-map-style-options.png "Figure 3 - Three Map Style Options")

***Figure 3 - Three Map Style Options***

In figure 4 below you can see that only the Major Earthquakes are showing in the Dark map per my selections.

![Just major earthquakes selected on the map with three map style and three layer options](/Resources/4-Just_Major_Earthquakes_Selected.png "Figure 4 - Just Major Earthquakes Selected")

***Figure 4 - Just Major Earthquakes Selected***

All the earthquake data and tectonic plate data are displayed on the all maps of the webpage.

## 3 Summary

The visualization tools should be of great value to the tean at the Disaster Reporting Network, they are now able to select any or all of the following items.

- Tectonic Plate Data
- All Earthquake Data
- Just Major Earthquake Data

The team  is also able to select views on the following MapBox maps:

- Streets
- Satellite
- Dark

All and all I would say this was a very successful project, including the major learning curve managing numerous branches of code in GitHub.