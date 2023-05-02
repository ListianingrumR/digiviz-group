// the let section is to declare/identify the section box in scrollytelling map
// put the top title below
// you can choose the style (h1 for heading 1, h2, etc and p for paragraph)
let topTitleDiv = "<h4>JAWASTE</h4>";

// put the title below
let titleDiv =
  "<h1>Beyond Waste Generation</h1>";

// put the byline
let bylineDiv = "<p class='byline'>by Rahmadita Listianingrum</p>";

// put the description here (can embed video and pictures)
let descriptionDiv =
  "<p><img src='images/waste.jpg'></p>"+
  "<p style=margin-top:50px>Globally, the production of waste has become a <span style='background-color:#F08137;color:white;font-size:large'>severe problem</span> that affects the economy, the environment, and health. The World Bank calculates that about <span style='background-color:#1C5174;color:white;font-size:large'>2.01 billion</span> metric tonnes of municipal solid waste are produced globally each year.</p>" +
  "<p>Effective waste management practices are crucial to reduce the impact of waste on the environment and public health. Developed countries have established waste management systems, including recycling and landfilling, to handle their waste. However, developing countries still face challenges in waste management due to insufficient resources and inadequate infrastructure, including <span style='background-color:#F08137;color:white;font-size:large'>Indonesia</span>.</p>"+
  "<p>Indonesia, <span style='background-color:#F08137;color:white;font-size:large'>the fourth most populous country in the world</span>, generates about <span style='background-color:#1C5174;color:white;font-size:large'>65 million</span> metric tons of waste each year, and this number is expected to increase. The waste generation rate in Indonesia is influenced by various factors, such as rapid urbanization, population growth, and changing lifestyles.</p>"+
  "<p> In this data scrollytelling, we will explore the waste generation in Indonesia capital, <span style='background-color:#1C5174;color:white;font-size:large'>Jakarta</span>.</p>" +
  '<p style="text-align:center;margin-top:100px">Lets scroll!<br>▼</p>';

// put the footer information here
let footerDiv =
  '<p>This base map is based on data by the <a href="https://sipsn.menlhk.go.id/sipsn/">Indonesian Ministry of Environment and Forestry</a> and <a href="https://data.jakarta.go.id">Open Data Jakarta</a>. </br>This project can be found in this <a href="https://github.com/ListianingrumR/digiviz-individual.git">Github repository</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="https://www.datawrapper.de" target="_blank">© Datawrapper</a> | <a href="https://www.ucl.ac.uk/bartlett/casa/bartlett-centre-advanced-spatial-analysis">UCL Centre for Advanced Spatial Analysis</a></p>';

// put the 1st box navigation here
let divChapter1 =
"<p><b>Jakarta Facts</b></p>" + "<hr>" +
"<p><img src='images/Skyline-Jakarta-Indonesia.jpg'></p>"+ "<hr>" +
// https://cdn.britannica.com/88/132688-050-E9739DD9/Skyline-Jakarta-Indonesia.jpg
"<p><b>Area: 661.5 km2</b></p>"+
"<p><b>Total population: 10.56 million</b></p>"+ "<hr>" +
"<p>Jakarta is one of the most densely populated city in the world. This leads to the waste management in Jakarta is one of the challenge that is faced by the government."

// continue to next box/chapter
let divChapter2 =
  "<p><b>Waste in Jakarta</b></p>" + "<hr>" +
  "<p><img src='images/landfill.jpg'></p>"+ "<hr>" +
  // https://thejakartapost.com
  "<p><b>Waste generation per day: 8,527.07 ton</b></p>"+
  "<p><img src='images/jakarta-waste-volume-per-day-by-type-ton.png'></p>"+
  "<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/m2o0s/3/'>Environment Office DKI Jakarta</a></p>"+
  "<p>Jakarta is divided into 6 districts, which are Thousand Islands, Central Jakarta, North Jakarta, West Jakarta, East Jakarta and South Jakarta.</p>"+
  "<p><img src='images/jakarta-waste-generation-by-district-per-day-ton.png'></p>"+
  "<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/o50nX/1/'>Indonesian Ministry of Environment and Forestry</a></p>";
  //https://datawrapper.dwcdn.net/o50nX/1/

let divChapter3 =
  "<p><b>Thousand Islands</b></p>" + "<hr>" +
  "<p>Area: 10.73 km²</p>"+
  "<p>Total Population: 29,719</p>"+
  "<p>Waste Generation per day (metric tons): 17.89 ";

let divChapter4 =
   "<p><b>Central Jakarta</b></p>" + "<hr>" +
  "<p>Area: 47.56 km²</p>"+
  "<p>Total Population: 1,105,731</p>"+
  "<p>Waste Generation per day (metric tons): 850.05";

let divChapter5 =
  "<p><b>North Jakarta</b></p>" + "<hr>" +
  "<p>Area: 147.46 km²</p>"+
  "<p>Total Population: 1,865.647</p>"+
  "<p>Waste Generation per day (metric tons): 1,368.44";

let divChapter6 =
  "<p><b>West Jakarta</b></p>" + "<hr>" +
  "<p>Area: 125 km²</p>"+
  "<p>Total Population: 2,589,589</p>"+
  "<p>Waste Generation per day (metric tons): 2,023.42";

let divChapter7 =
  "<p><b>East Jakarta</b></p>" + "<hr>" +
  "<p>Area: 185,54 km²</p>"+
  "<p>Total Population: 3.274.716</p>"+
  "<p>Waste Generation per day (metric tons): 2,313.02";

let divChapter8 =
  "<h3>South Jakarta</h3>" + "<hr>" +
  "<p>Area: 144,94 km²</p>"+
  "<p>Total Population: 2.384.183</p>"+
  "<p>Waste Generation per day (metric tons): 1,954.25";

let divChapter9 =
  "<p>Geographically, Jakarta is located in the south of Java Sea, giving it a title as coastal city. It is also home for several rivers in Java Island. From the neighborhood provinces and cities, usually there are waste generated along the river."+
  "<p>This is because of the people's awareness of waste disaster is still very low. People keeps throwing garbage into the river and the solution from the government is to build waste filters along the rivers."+
  "<p>These filters are represented by the <span style='background-color:#86f462;color:white;font-size:large'>green dots</span>";

let divChapter10 =
  "<p>Here is the distribution of the small waste collection centre in Jakarta that are represented by the <span style='background-color:#3d51eb;color:white;font-size:large'>blue dots</span>.</p>";

let divChapter11 =
  "<p>To combat the waste crisis in Jakarta, the participation of its citizen is needed. Some of the NGOs in Jakarta raise the awareness by building waste bank to help the government collect the waste.</p>"+
  "<p>Besides that, Jakarta's government also in the process of building 4 medium waste collection centre and power plant to convert the waste into energy.";

// the var section is to navigate the map in each chapter/box
var config = {
  style: "mapbox://styles/listianingrumr/cleyzhwq7000t01qax67dzus2", // mapbox styles
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
        center: [117.17159, -0.44823], 
        zoom: 3.9,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo", // animation flyto
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
      ],
      onChapterExit: [],
    },
    {
      id: "Jakarta",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [106.82692, -6.17459],
        zoom: 10.39,
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
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "timbulandki22",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Kepulauan Seribu",
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
    {
      id: "Jakarta Pusat",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [106.82720, -6.17541],
        zoom: 13,
        zoomSmall: 5,
        pitch: 40,
        bearing: -7,
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
          layer: "jakpus",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "jakpus",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Jakarta Utara",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [106.78949, -6.12365],
        zoom: 13,
        zoomSmall: 6,
        pitch: 40,
        bearing: -7,
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
          layer: "jakut",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "jakut",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Jakarta Barat",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [106.77057, -6.19585],
        zoom: 13,
        zoomSmall: 6,
        pitch: 40,
        bearing: -7,
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
          layer: "jakbar",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "jakbar",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Jakarta Timur",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [106.90053, -6.24290],
        zoom: 13,
        zoomSmall: 6,
        pitch: 40,
        bearing: -7,
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
          layer: "jaktim",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "jaktim",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Jakarta Selatan",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [106.79602, -6.29670],
        zoom: 13,
        zoomSmall: 13.5,
        pitch: 45,
        bearing: -7,
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
          layer: "jaksel",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "jaksel",
          opacity: 0,
          duration: 300,
        },
      ], 
    },
    {
      id: "Saringan Sungai Jakarta",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9,
      location: {
        center: [106.82692, -6.17459],
        zoom: 10.39,
        zoomSmall: 13,
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
        },{
          layer: "saringan-sampah-sungai",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "timbulandki22",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "TPS Jakarta",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter10,
      location: {
        center: [106.82692, -6.17459],
        zoom: 10.39,
        zoomSmall: 13,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "tps",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "saringan-sampah-sungai",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "timbulandki22",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "End",
      alignment: "centre",
      image: "",
      hidden: false,
      chapterDiv: divChapter11,
      location: {
        center: [106.82692, -6.17459],
        zoom: 10.39,
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
          opacity: 0.5,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
  ],
};

