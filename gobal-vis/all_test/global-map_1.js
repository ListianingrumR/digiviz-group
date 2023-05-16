// initialize the map
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpc2RvdWRvdSIsImEiOiJjbGYwYm4zZzUwN3BwM3lzOGN0ZWFpajJsIn0.ArmXQ1-s8Ypt8Yryyb5jGw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/erisdoudou/clhgnites000g01qtggshebjw',
  center: [132.85, 10.12],
  zoom: 2.05
});

// add the tileset as a source
map.on('load', function() {
  map.addSource('world-gdp', {
    type: 'vector',
    url: 'mapbox://erisdoudou.07ca799x'
  });
});

// create an array of years to loop through
var years = ['1990', '1995', '2000', '2005', '2010', '2015', '2020'];

// loop through the years and add a layer for each year
years.forEach(function(year) {
  map.addLayer({
    'id': year,
    'type': 'fill',
    'source': 'world-gdp',
    'source-layer': 'world-gdp-all-cleaned-b9n1mg',
    'paint': {
      'fill-color': {
        'property': year,
        'stops': [
          [0, '#f1eef6'],
          [1000000000, '#bdc9e1'],
          [5000000000, '#74a9cf'],
          [10000000000, '#2b8cbe'],
          [50000000000, '#045a8d']
        ]
      },
      'fill-opacity': 0.8
    },
    'filter': ['has', year]
  });
});

// update the map when the slider changes
document.getElementById('slider-input').addEventListener('input', function(e) {
  var year = e.target.value;
  map.setFilter('1990', ['has', year]);
  map.setFilter('1995', ['has', year]);
  map.setFilter('2000', ['has', year]);
  map.setFilter('2005', ['has', year]);
  map.setFilter('2010', ['has', year]);
  map.setFilter('2015', ['has', year]);
  map.setFilter('2020', ['has', year]);
  document.getElementById('slider-value').textContent = year;
});

