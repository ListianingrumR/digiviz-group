mapboxgl.accessToken = 'pk.eyJ1IjoibmluYWZhYnNpa292YSIsImEiOiJja2twaWZlMjQwYTFsMzBxbnE5dWo2Mjk1In0.XLvRzC0uK94qxRFEGWZ-fQ';

// Load a new map in the 'map' HTML div
const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/ninafabsikova/cl31ozdf9002014l49icsmobh', 
center: [-15, 0], // starting position [lng, lat]
zoom: 1.5, // starting zoom
});

// Disable default box zooming.
map.boxZoom.disable();

map.on('load', function() {

  const canvas = map.getCanvasContainer();

  // Variable to hold the starting xy coordinates when `mousedown` occured.
  let start;

  // Variable to hold the current xy coordinates when `mousemove` or `mouseup` occurs.
  let current;

  // Variable for the draw box element.
  let box;

  //add flood extents
  map.addSource('flood-extents', {
    'type': 'vector',
    'url': 'mapbox://ninafabsikova.7sxe8hkc'
  })
  map.addLayer({
    id: 'extents',
    type: 'fill',
    source: 'flood-extents',
    'source-layer': 'flood_extent-96moi8',
    paint: {
      'fill-color': 'black',
      'fill-opacity': 0
    }
  })

  map.addLayer({
    id: 'extents-selected',
    type: 'fill',
    source: 'flood-extents',
    'source-layer': 'flood_extent-96moi8',
    paint: {
      'fill-color': 'black',
      'fill-opacity': 0.05
    },
    filter: ['==', ['number', ['get', 'ID']], 10000]
  })

  map.addLayer({
    id: 'extents-highlighted',
    type: 'fill',
    source: 'flood-extents',
    'source-layer': 'flood_extent-96moi8',
    'layout': {
      'visibility': 'visible'
    },
    paint: {
      'fill-color': '#48cae4',
      'fill-opacity': 0.6
    },
    filter: ['==', ['number', ['get', 'ID']], 10000]
  })

  //add circles to map
  map.addLayer({
    id: 'floods',
    type: 'circle',
    source: {
      type: 'vector',
      url: 'mapbox://ninafabsikova.bdzdrcif',
      promoteId:'ID'
    },
    'source-layer': 'floods2-4x8fkq',
    paint: {
      'circle-color': [
        'match',
        ['get', 'MainCause2'],
        'Heavy rain',
        '#3b9da0',
        'Tropical storm/surge',
        '#22429b',
        'Snowmelt. ice',
        '#3dbbff',
        'Dam',
        '#b740f7',
        '#596073'
      ],
      'circle-opacity': {
        stops: [[2, 0.35], [8, 1]]
      },
      'circle-radius': {
        property: 'Dead',
        stops: [
          [{zoom: 2, value: 0}, 5], 
          [{zoom: 5, value: 0}, 5],
          [{zoom: 5, value: 1}, 9],
          [{zoom: 5, value: 100}, 13],
          [{zoom: 5, value: 1000}, 17],
          [{zoom: 5, value: 10000}, 21],
          [{zoom: 5, value: 100000}, 25]
        ]
      },
      'circle-stroke-color': 'black',
      'circle-stroke-width': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        3,
        0
      ]
    }
  });

    //add circles to map
    map.addLayer({
      id: 'floods-highlighted',
      type: 'circle',
      source: {
        type: 'vector',
        url: 'mapbox://ninafabsikova.bdzdrcif',
        promoteId:'ID'
      },
      'source-layer': 'floods2-4x8fkq',
      paint: {
        'circle-color': [
          'match',
          ['get', 'MainCause2'],
          'Heavy rain',
          '#3b9da0',
          'Tropical storm/surge',
          '#22429b',
          'Snowmelt. ice',
          '#3dbbff',
          'Dam',
          '#b740f7',
          '#596073'
        ],
        'circle-opacity': {
          stops: [[2, 0.35], [8, 1]]
        },
        'circle-radius': {
          property: 'Dead',
          stops: [
            [{zoom: 2, value: 0}, 5], 
            [{zoom: 5, value: 0}, 5],
            [{zoom: 5, value: 1}, 9],
            [{zoom: 5, value: 100}, 13],
            [{zoom: 5, value: 1000}, 17],
            [{zoom: 5, value: 10000}, 21],
            [{zoom: 5, value: 100000}, 25]
          ]
        },
        'circle-stroke-color': 'black',
        'circle-stroke-width': 3
      },
      filter: ['in', 'ID', '']
    });

  // Set `true` to dispatch the event before other functions
  // call it. This is necessary for disabling the default map
  // dragging behaviour.
  canvas.addEventListener('mousedown', mouseDown, true);

  // Return the xy coordinates of the mouse position
  function mousePos(e) {
    const rect = canvas.getBoundingClientRect();
    return new mapboxgl.Point(
      e.clientX - rect.left - canvas.clientLeft,
      e.clientY - rect.top - canvas.clientTop
    );
  }

   
  function mouseDown(e) {
    // Continue the rest of the function if the shiftkey is pressed.
    if (!(e.shiftKey && e.button === 0)) return;
    
    // Disable default drag zooming when the shift key is held down.
    map.dragPan.disable();
    
    // Call functions for the following events
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('keydown', onKeyDown);
    
    // Capture the first xy coordinates
    start = mousePos(e);
  }
   
  function onMouseMove(e) {
    // Capture the ongoing xy coordinates
    current = mousePos(e);
    
    // Append the box element if it doesnt exist
    if (!box) {
      box = document.createElement('div');
      box.classList.add('boxdraw');
      canvas.appendChild(box);
    }
   
    const minX = Math.min(start.x, current.x),
          maxX = Math.max(start.x, current.x),
          minY = Math.min(start.y, current.y),
          maxY = Math.max(start.y, current.y);
   
    // Adjust width and xy position of the box element ongoing
    const pos = `translate(${minX}px, ${minY}px)`;
    box.style.transform = pos;
    box.style.width = maxX - minX + 'px';
    box.style.height = maxY - minY + 'px';
  }
    
  function onMouseUp(e) {
    // Capture xy coordinates
    finish([start, mousePos(e)]);
  }
   
  function onKeyDown(e) {
    // If the ESC key is pressed
    if (e.keyCode === 27) finish();
  }
   
  function finish(bbox) {

    // Remove these events now that finish has been called.
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('mouseup', onMouseUp);
    
    if (box) {
      box.parentNode.removeChild(box);
      box = null;
    }
    
    // If bbox exists. use this value as the argument for `queryRenderedFeatures`
    if (bbox) {
      const features = map.queryRenderedFeatures(bbox, {
      layers: ['extents']
    });

    console.log(features);
    
    if (features.length >= 1000) {
    return window.alert('Select a smaller number of features');
    }
    
    // Run through the selected features and set a filter
    // to match features with unique id codes to activate
    // the `floods-highlighted` layer.
    const ids = features.map((feature) => feature.properties.ID);

    console.log(ids);
      map.setFilter('extents-selected', ['in', 'ID', ...ids]);
      map.setFilter('floods-highlighted', ['in', 'ID', ...ids]);
    }
    
    map.dragPan.enable();

  }

});
 
//add year slider
document.getElementById('slider').addEventListener('input', (event) => {
  const year = parseInt(event.target.value);

  // update the map
  filterYear = ['==', ['number', ['get', 'year']], year];
  map.setFilter('floods', ['all', filterYear]);

  // update text in the UI
  document.getElementById('active-year').innerText = year;

  //update layer styling
  map.setPaintProperty('floods', 'circle-opacity', 0.8)

  //enable button
  document.getElementById('button').disabled = false;

});
 
//add buton for returning to all years
document.getElementById('button').addEventListener('click', (event) => {

  map.setPaintProperty('floods', 'circle-opacity', {stops: [[2, 0.25], [8, 1]]})

  setTimeout(function(){
    map.setFilter('floods', null);
  },150);

    // update text in the UI
    document.getElementById('active-year').innerText = '1985 - 2021';

  //disable button
  document.getElementById('button').disabled = true;

  
});
 
// add filter for cause of flood
document.getElementById('cause-legend').addEventListener('mouseover', function(e) {
let cause = e.target.getAttribute('id');

switch(cause) {
  case 'heavyRain':
    mainCause = 'Heavy rain';
    break;
  case 'tropicalStorm':
    mainCause = 'Tropical storm/surge';
    break;
  case 'snowmeltIce':
    mainCause = 'Snowmelt. ice'
    break;
  case 'dam':
    mainCause = 'Dam';
    break;
  case 'other':
    mainCause = 'Other';
    break;
}

if (document.getElementById('button').disabled) {
  map.setFilter('floods', ['==', ['get', 'MainCause2'], mainCause])
} else {
  let filteredYear = parseInt(document.getElementById('slider').value);
  let yearFilter = ['==', ['number', ['get', 'year']], filteredYear]
  let causeFilter = ['==', ['get', 'MainCause2'], mainCause]
  
  map.setFilter('floods', ['all', yearFilter, causeFilter]);
}

});

document.getElementById('cause-legend').addEventListener('mouseleave', function(e) {

  if (document.getElementById('button').disabled) {
    map.setFilter('floods');
  } else {
    let filteredYear = parseInt(document.getElementById('slider').value);
    map.setFilter('floods', ['==', ['number', ['get', 'year']], filteredYear]);
  }

});

//add filter for number of deaths 
document.getElementById('deaths-legend').addEventListener('mouseover', function(e) {
  let minDeaths = parseInt(e.target.getAttribute('id'));
  
  switch(minDeaths) {
    case 0:
      maxDeaths = 0;
      break;
    case 1:
      maxDeaths = 1000;
      break;
    case 1000:
      maxDeaths = 10000;
      break;
    case 100000:
      maxDeaths = 10000000000;
  }

  minDeathFilter = ['>=', ['get', 'Dead'], minDeaths];
  maxDeathFilter = ['<=', ['get', 'Dead'], maxDeaths]

  //update layer styling
  if (document.getElementById('button').disabled) {
    if (minDeaths == 1000 | minDeaths == 100000) {
      console.log('hello')
        map.setPaintProperty('floods', 'circle-opacity', 0.8)
    }
    setTimeout(function(){
      map.setFilter('floods', ['all', minDeathFilter, maxDeathFilter])
    },150);

  } else {
    let filteredYear = parseInt(document.getElementById('slider').value);
    let yearFilter = ['==', ['number', ['get', 'year']], filteredYear]
    
    map.setFilter('floods', ['all', yearFilter, minDeathFilter, maxDeathFilter]);

  }
});

document.getElementById('deaths-legend').addEventListener('mouseleave', function(e) {

  if (document.getElementById('button').disabled) {
    map.setPaintProperty('floods', 'circle-opacity', {
      stops: [[2, 0.35], [8, 1]]
    })
    
    setTimeout(function(){
      map.setFilter('floods');
    },150);


  } else {
    let filteredYear = parseInt(document.getElementById('slider').value);
    map.setFilter('floods', ['==', ['number', ['get', 'year']], filteredYear]);
  }

})

 
//add mouseover highlight behaviour (popup, highlight, flood extent)
var popup = new mapboxgl.Popup({offset:[120,-20],closeButton: false});

let pointId = null;
 
map.on('mousemove', 'floods', function(e) {
var zoom = map.getZoom();

if (!document.getElementById('button').disabled | zoom > 3.5) {
  if (e.features.length === 0) return;

    //create popup
    let properties = e.features[0].properties;
    popup
    .setLngLat(e.features[0].geometry.coordinates)
    .setHTML("<b>Country: </b>" + properties.Country +
            "<br><b>Year: </b>" + properties.year + 
            "<br><b>Main Cause: </b>" + properties.MainCause +
            "<br><b>Area: </b>" + properties.Area + " km<sup>2</sup>" +
            "<br><b>Dead: </b>" + properties.Dead+
            "<br><b>Displaced: </b>" + properties.Displaced)
    .addTo(map);

    //highlight point
    if (pointId) {
      map.removeFeatureState({
      source: 'floods',
      sourceLayer: 'floods2-4x8fkq',
      id: pointId
    });
    }

    pointId = properties.ID
  
    // When the mouse moves over the floods layer, update the feature state for the feature under the mouse
    map.setFeatureState(
      {
        source: 'floods',
        sourceLayer: 'floods2-4x8fkq',
        id: pointId
      },
      {
        hover: true
      }
    );

     //show flood extent
     let id = e.features[0].properties.ID;
     map.setFilter('extents-highlighted', ['==', ['number', ['get', 'ID']], id]);

     //change cursor to pointer
     map.getCanvas().style.cursor = 'pointer';
   }
 
  })
  .on('mouseleave', 'floods', function(e) {

    //remove point highlight
    if (pointId) {
      map.setFeatureState(
        {
          source: 'floods',
          sourceLayer: 'floods2-4x8fkq',
          id: pointId
        },
        {
          hover: false
        }
      );
    }
  
    pointId = null;

    if (document.getElementById('button').disabled) {
      map.setFilter('floods');
    } else {
      let filteredYear = parseInt(document.getElementById('slider').value);
      map.setFilter('floods', ['==', ['number', ['get', 'year']], filteredYear]);
    }

    popup.remove()
    map.getCanvas().style.cursor = '';
    map.setFilter('extents-highlighted', ['==', ['number', ['get', 'ID']], 10000]);

  })


 