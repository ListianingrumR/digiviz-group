// Access token for Mapbox API
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpc2RvdWRvdSIsImEiOiJjbGYwYm4zZzUwN3BwM3lzOGN0ZWFpajJsIn0.ArmXQ1-s8Ypt8Yryyb5jGw';

// Initialize map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/erisdoudou/clhgnites000g01qtggshebjw',
  center: [132.85, 10.12],
  zoom: 2.05
});

// Create a variable to store the current year
var currentYear = '2007';

// Add a listener to the time slider to update the current year and data on the map
var slider = document.getElementById('slider');
slider.addEventListener('input', function(e) {
  currentYear = e.target.value;
  updateMapData(currentYear);
});

// Function to update the map data based on the current year
function updateMapData(year) {
  // Update the source layer data for each of the choropleth layers in the map style
  map.getStyle().layers.forEach(function(layer) {
    if (layer.id.indexOf('choropleth') !== -1) {
      map.getSource(layer.source).setData('https://api.mapbox.com/v4/erisdoudou.' + layer.id + '-' + year + '.json?access_token=' + mapboxgl.accessToken);
    }
  });
}

// Add a listener to wait for the map to load before updating the data for the initial year
map.on('load', function() {
  updateMapData(currentYear);
});
