# Mapping_Earthquakes

## 1 Purpose



## 2 Results

You will submit the following:

- Add Tectonic Plate Data
- Add Major Earthquake Data
- Add an Additional Map

### 2.1: Add Tectonic Plate Data

Using your knowledge of JavaScript, Leaflet.js, and geoJSON data, you’ll add tectonic plate data using d3.json(), add the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and add the tectonic plate data to the overlay object with the earthquake data.

**35 to >33.0 pts**

Demonstrating Proficiency

✓The tectonic plate data is added to the layer group. 

✓The tectonic plate data is added to the overlay object. 

✓The tectonic plate data is added to the map, and the fault lines are styled. 

✓The earthquake data and tectonic plate data are displayed when the page loads.

Your final map should look similar to the following image:

![ All earthquake data  and  tectonic plate data on the map](/Resources/data-13-all-earthquake-data-tectonic-plate-data-on-map.png)

### Deliverable 1 Requirements

You will earn a perfect score for Deliverable 1 by completing all requirements below:

- The tectonic plate data is added as a second layer group **(10 pt)**
- The tectonic plate data is added to the overlay object **(10 pt)**
- The d3.json() callback is working and does the following: ***(10 pt)***
  - The tectonic plate data is passed to the geoJSON() layer
  - The `geoJSON()` layer adds color and width to the tectonic plate lines
  - The tectonic layer group variable is added to the map
- The earthquake data and tectonic plate data displayed on the map when the page loads **(5 pt)**

### 2.2: Add Major Earthquake Data

Using your knowledge of JavaScript, Leaflet.js, and geoJSON data, you’ll add major earthquake data to the map using d3.json(). You'll also add color and set the radius of the circle markers based on the magnitude of earthquake, and add a popup marker for each earthquake that displays the magnitude and location of the earthquake using the GeoJSON layer, geoJSON().

**50 to >44.0 pts**

Demonstrating Proficiency

✓The major earthquake data is added as a third layer group.

✓The tectonic plate data is added to the overlay object. 

✓The major earthquake data is added to the map and styled, but there are no popup markers. 

✓ALL the earthquake data and tectonic plate data are displayed when the page loads.

Similar to the following image:

![All earthquakes, major earthquakes, and tectonic plate data on the map](/Resources/data-13-earthquakes-major-earthquakes-tectonic-plate-data-on-the-map.png)

### Deliverable 2 Requirements

You will earn a perfect score for Deliverable 2 by completing all requirements below:

- The major earthquake data is added as a third layer group **(10 pt)**
- The major earthquake data is added to the overlay object **(10 pt)**
- The d3.json() callback is working and does the following: ***(25 pt)***
  - Sets the color and diameter of each earthquake.
  - The major earthquake data is passed to the `geoJSON()` layer.
  - The geoJSON() layer creates a circle for each major earthquake, and adds a popup for each circle to display the magnitude and location of the earthquake
  - The major earthquake layer group variable is added to the map
- All the earthquake data and tectonic plate data are displayed on the map when the page loads and the datasets can be toggled on or off **(5 pt)**

### 2.3: Add an Additional Map

Using your knowledge of JavaScript and Leaflet.js add a third map style to your earthquake map.

**15 to >13.0 pts**

Demonstrating Proficiency

✓A third map tile layer is created. 

✓The third map is added to the overlay object. 

✓ALL the earthquake data and tectonic plate data are displayed on all maps on the webpage.

## Rubric

Follow the instructions to complete Deliverable 3.

1. Using the options from the [Mapbox styles (Links to an external site.)](https://docs.mapbox.com/api/maps/#styles), add a third map style as a tile layer object to the challenge_logic.js  file.

2. Add the map variable to the base layer object.

3. Start your Python server and launch the index.html file and confirm that your map is similar to the following image, where there are three map styles, and displays the two earthquake data sets and the tectonic plate data.

   

Three map styles, and displays the two earthquake data sets and the tectonic plate data.

![All earthquakes, major earthquakes, and tectonic plate data on the map with three map style options](/Resources/data-13-three-map-style-options.png)

### Deliverable 3 Requirements

You will earn a perfect score for Deliverable 3 by completing all requirements below:

- A third map tile layer is created **(5 pt)**
- The third map is added to the overlay object **(5 pt)**
- All the earthquake data and tectonic plate data are displayed on the all maps of the webpage **(5 pt)**

## 3 Summary

You will submit the following:

- Deliverable 1: Add Tectonic Plate Data
- Deliverable 2: Add Major Earthquake Data
- Deliverable 3: Add an Additional Map