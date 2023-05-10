// the let section is to declare/identify the section box in scrollytelling map
// put the top title below
// you can choose the style (h1 for heading 1, h2, etc and p for paragraph)
let topTitleDiv = "<h4>glocur</h4>";

// put the title below
let titleDiv =
  "<h1>Global Crisis Impact on Urban Regeneration</h1>";

// put the byline
let bylineDiv = "<p class='byline'>by Group 13 - Asian Geeks<br>(Juerong Wang, Rahmadita Listianingrum, Yiru Li)</p>";

// put the description here (can embed video and pictures)
let descriptionDiv =
  "<p><img src='img/crisis.jpg'></p>" +
  "<p style=margin-top:50px>Introduction</p>" +
  "<p style=margin-top:50px>Put the introduction here, the research background and design, expected analysis</p>" +
  "<p style=margin-top:50px>Put the introduction video</p>" +
  '<p style="text-align:center;margin-top:100px">Lets scroll!<br>▼</p>';

// put the footer information here
let footerDiv =
  '<p>This base map is based on data by the <a href="https://sipsn.menlhk.go.id/sipsn/">Indonesian Ministry of Environment and Forestry</a> and <a href="https://data.jakarta.go.id">Open Data Jakarta</a>. </br>This project can be found in this <a href="https://github.com/ListianingrumR/digiviz-individual.git">Github repository</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="https://www.datawrapper.de" target="_blank">© Datawrapper</a> | <a href="https://www.ucl.ac.uk/bartlett/casa/bartlett-centre-advanced-spatial-analysis">UCL Centre for Advanced Spatial Analysis</a></p>';

// put the 1st box navigation here
let divChapter1 =
  "<p><b>Global Crisis - The History</b></p>" + "<hr>" +
  "<p>Put the charts for world historical crisis from 1969</p>" + "<hr>" +
  "<p><img src='img/the-great-recession.png'></p>" + "<hr>" +
  // https://www.kent.ac.uk/business-and-partnerships/news-and-events/922/the-impact-of-cost-cutting-actions-on-employee-relations-and-workplace-grievances-what-weve-learned-from-the-great-recession
  "<p><b>The Great Recession</b></p>" +
  "<p>The Great Recession brief explanation</p>"

let divChapter2 =
"<p style=margin-top:50px>Interactive Map of World GDP+Unemployment rate+Charts GDP</p>" +
"<p style=margin-top:50px>Chart for Population Growth</p>" +
"<p><b>Global Housing Price Index </b></p>" + "<hr>" +
"<p> Interactive map"
  
// continue to next box/chapter
let divChapter3 =
  "<p><b>Where it starts</b></p>" + "<hr>" +
  "<p><img src='img/lehmanbrothers.jpg'></p>" + "<hr>" +
  // https://www.thebalancemoney.com/lehman-brothers-collapse-causes-impact-4842338
  "<p><b>Lehman Brothers Bankcruptcy</b></p>" +
  "<p>Bridging to the USA (housing bubble, subprime mortgage)</p>"
//"<p><img src='images/jakarta-waste-volume-per-day-by-type-ton.png'></p>"+
//"<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/m2o0s/3/'>Environment Office DKI Jakarta</a></p>"+
//"<p>Jakarta is divided into 6 districts, which are Thousand Islands, Central Jakarta, North Jakarta, West Jakarta, East Jakarta and South Jakarta.</p>"+
//"<p><img src='images/jakarta-waste-generation-by-district-per-day-ton.png'></p>"+
//"<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/o50nX/1/'>Indonesian Ministry of Environment and Forestry</a></p>";
//https://datawrapper.dwcdn.net/o50nX/1/

let divChapter4 =
  "<p><b>USA Housing bubble</b></p>" + "<hr>" +
  "<p>Housing Foreclosure 2008 interactive Map</p>" 

let divChapter5 =
  "<p><b>California Case, why?</b></p>" + "<hr>" +
  "<p>Zoom to California</p>"

let divChapter6 =
  "<p><b>Texas case, why?</b></p>" + "<hr>" +
  "<p>Zoom to Texas</p>" 

// YR codes
let divChapter7 =
  "<p><b>Australia</b></p>" + "<hr>" +
  "<p>Area 2023: 7,692,024 km²</p>" +
  "<p>Total Population 2023 : 26,339,393 </p>" +
  '<div id="chart-container"></div>' +
  '<iframe src="chart.html" width="100%" height="300px"></iframe>';

let divChapter8 =
  "<p><b>Sydney</b></p>" + "<hr>" +
  "<a href='https://www.macrotrends.net/cities/206167/sydney/population'>Sydney, Australia Metro Area Population 1950-2023</a>";

//YR

// the var section is to navigate the map in each chapter/box
var config = {
  style: "mapbox://styles/listianingrumr/clh73da2a00t201qyb97adh5y", // mapbox styles
  accessToken: "pk.eyJ1IjoibGlzdGlhbmluZ3J1bXIiLCJhIjoiY2xkYWhqNDZhMDFpajN2b2JlbWk0b3I5byJ9.MMQjrAuB1KMHcaKfXrnn3w", // mapbox token
  showMarkers: false, // no marker
  markerColor: "#327CA7", // marker color
  theme: "light",
  use3dTerrain: false, // if using 3d terrain
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [ // chapter for basemap (in this example, it is from the introduction to chapter 1 using basemap)
    {
      id: "baseMap",
      alignment: "center",
      image: "",
      hidden: false,
      chapterDiv: divChapter1,
      location: { // identify the location, the zoom scale, the pitch and bearing
        center: [186.328125, 39.095963], // use bbox finder
        zoom: 1.5,
        zoomSmall: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo", // animation flyto
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "usa",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "globalcrisis",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [186.328125, 39.095963],
        zoom: 1.5,
        zoomSmall: 1,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "usa",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "usa",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "globalhpi",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter3,
      location: {
        center: [260.683594, 39.571822],
        zoom: 2.5,
        zoomSmall: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "usa",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "usa",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "usa",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter4,
      location: {
        center: [260.683594, 39.571822],
        zoom: 4,
        zoomSmall: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "housing-filed-cases-2000",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "housing-filed-cases-2000",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "california",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter5,
      location: {
        center: [260.683594, 39.571822],
        zoom: 10,
        zoomSmall: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "housing-filed-cases-2000",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "housing-filed-cases-2000",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "texas",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter6,
      location: {
        center: [260.683594, 39.571822],
        zoom: 10,
        zoomSmall: 2,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "housing-filed-cases-2000",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "housing-filed-cases-2000",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    //YR
    {
      id: "Australia",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [151.2093, -33.8688],
        zoom: 3.5,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tps",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "tps",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Sydney",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [151.2093, -33.8688],
        zoom: 9,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tps",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "tps",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    //YR
    /*
         {
           layer: "tps",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "saringan-sampah-sungai",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "timbulandki22",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "seribu",
           opacity: 1,
           duration: 300,
         },
         {
           layer: "jakpus",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "jakut",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "jakbar",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "jaktim",
           opacity: 0,
           duration: 300,
         },
         {
           layer: "jaksel",
           opacity: 0,
           duration: 300,
         },
       ],
       onChapterExit: [
         {
           layer: "seribu",
           opacity: 0,
           duration: 300,
         },
       ],
     },*/
  ],
};