// the let section is to declare/identify the section box in scrollytelling map
// put the top title below
// you can choose the style (h1 for heading 1, h2, etc and p for paragraph)
let topTitleDiv = "<h4>FCUR</h4>";

// put the title below
let titleDiv =
  "<h1>Financial Crisis Impact on Urban Regeneration</h1>";

// put the byline
let bylineDiv = "<p class='byline'>by Asian Geeks<br>(Juerong Wang, Rahmadita Listianingrum, Yiru Li)</p>";

// put the description here (can embed video and pictures)
let descriptionDiv =
  "<p><img src='img/crisis.jpg'></p>"+
  "<p style=margin-top:50px>Introduction</p>" +
  '<p style="text-align:center;margin-top:100px">Lets scroll!<br>▼</p>';

// put the footer information here
let footerDiv =
  '<p>This base map is based on data by the <a href="https://sipsn.menlhk.go.id/sipsn/">Indonesian Ministry of Environment and Forestry</a> and <a href="https://data.jakarta.go.id">Open Data Jakarta</a>. </br>This project can be found in this <a href="https://github.com/ListianingrumR/digiviz-individual.git">Github repository</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="https://www.datawrapper.de" target="_blank">© Datawrapper</a> | <a href="https://www.ucl.ac.uk/bartlett/casa/bartlett-centre-advanced-spatial-analysis">UCL Centre for Advanced Spatial Analysis</a></p>';

// put the 1st box navigation here
let divChapter1 =
"<p><b>Financial Crisis - The History</b></p>" + "<hr>" +
"<p><img src='img/the-great-recession.png'></p>"+ "<hr>" +
// https://www.kent.ac.uk/business-and-partnerships/news-and-events/922/the-impact-of-cost-cutting-actions-on-employee-relations-and-workplace-grievances-what-weve-learned-from-the-great-recession
"<p><b>The Great Recession: </b></p>"

// continue to next box/chapter
let divChapter2 =
  "<p><b>Where it starts</b></p>" + "<hr>" +
  "<p><img src='img/lehmanbrothers.jpg'></p>"+ "<hr>" +
  // https://www.thebalancemoney.com/lehman-brothers-collapse-causes-impact-4842338
  "<p><b>Lehman Brothers Bankcruptcy</b></p>"
  //"<p><img src='images/jakarta-waste-volume-per-day-by-type-ton.png'></p>"+
  //"<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/m2o0s/3/'>Environment Office DKI Jakarta</a></p>"+
  //"<p>Jakarta is divided into 6 districts, which are Thousand Islands, Central Jakarta, North Jakarta, West Jakarta, East Jakarta and South Jakarta.</p>"+
  //"<p><img src='images/jakarta-waste-generation-by-district-per-day-ton.png'></p>"+
  //"<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/o50nX/1/'>Indonesian Ministry of Environment and Forestry</a></p>";
  //https://datawrapper.dwcdn.net/o50nX/1/

let divChapter3 =
  "<p><b>Australia</b></p>" + "<hr>" +
  "<p>Area:  km²</p>"+
  "<p>Total Population: </p>";

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
        center: [186.328125,39.095963], // use bbox finder
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
      id: "USA",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [260.683594,39.571822],
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
      id: "Australia",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [106.58067, -5.79391],
        zoom: 10,
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
    },
  ],
};