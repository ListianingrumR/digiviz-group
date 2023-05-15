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
  "<p><img src='img/lehmanbrothers.jpg'></p>" + "<hr>" ;
  // https://www.thebalancemoney.com/lehman-brothers-collapse-causes-impact-4842338
  

let divChapter4 =
  '<div id="chart-container"></div>' +
  '<iframe src="charts/timeline.html" width="100%" height="500px" frameBorder="0"></iframe>';
//"<p><img src='images/jakarta-waste-volume-per-day-by-type-ton.png'></p>"+
//"<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/m2o0s/3/'>Environment Office DKI Jakarta</a></p>"+
//"<p>Jakarta is divided into 6 districts, which are Thousand Islands, Central Jakarta, North Jakarta, West Jakarta, East Jakarta and South Jakarta.</p>"+
//"<p><img src='images/jakarta-waste-generation-by-district-per-day-ton.png'></p>"+
//"<p class='data-source'>Data source: <a href='https://datawrapper.dwcdn.net/o50nX/1/'>Indonesian Ministry of Environment and Forestry</a></p>";
//https://datawrapper.dwcdn.net/o50nX/1/

let divChapter5 =
  "<p><b>USA Housing bubble</b></p>" + "<hr>" +
  '<iframe src="charts/homevacant.html" width="100%" height="500px" frameBorder="0"></iframe>'+
  "<p>Bridging to the USA (housing bubble, subprime mortgage)</p>";
  // Housing Interactive Map
  //'<div class="chart-container" data-aos="fade-up"></div>' +
  //'<iframe id="housing" src="../housing/housing-foreclosure.html" height="800px" width="100%" frameBorder="0"></iframe>';

let divChapter6 =
  "<p><b>California Case, why?</b></p>" + "<hr>" +
  '<iframe src="swipe/urban.html" width="100%" height="800px" frameBorder="0"></iframe>';

let divChapter7 =
  "<p><b>Texas case, why?</b></p>" + "<hr>" +
  "<p>Zoom to Texas</p>"

// YR codes
let divChapter8 =
  "<p><b>Australia</b></p>" + "<hr>" +
  "<p>Area 2023: 7,692,024 km²</p>" +
  "<p>Total Population 2023 : 26,339,393 </p>" +
  "<p>Compared to the United Kingdom and the United States, Australia's employment situation remained favorable during and after the global financial crisis. While the average OECD unemployment rate increased from 5.7% to 8.8% during the crisis and dropped to 8.2% by Q2 2011, Australia's unemployment rate increased from 4.2% to a peak of 5.7% during the crisis, then fell to 4.9% by Q2 2011. Australia's long-term unemployment rate was also lower than the OECD average in 2011. This was partly due to many employers reducing working hours instead of laying off workers in response to the crisis, resulting in an average reduction of around 3.5% in working hours. This approach was similar to that of Germany, where the labor market demonstrated greater resilience than other OECD countries.</p>" +
  '<iframe src="https://data.oecd.org/chart/74X2" width="100%" height="645" style="border: 0" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true"><a href="https://data.oecd.org/chart/74X2" target="_blank">OECD Chart: Unemployment rate, Total, % of labour force, Monthly, Jul 2006 – Jun 2010</a></iframe>' 

let divChapter9 =
  "<p>Although Australia's economic data was generally positive, it did not avoid the impact of the financial crisis. The stock market capitalization in Australia fell by more than A$771 billion, which was equivalent to 65% of the country's 2008 gross domestic product (GDP) by 2009, and the net worth of the household sector experienced a sharp decline. Since around 43% of adults in Australia own shares either directly or indirectly, the drop in net worth was mainly caused by the decline in the value of share portfolios due to stock market falls. Even by 2009, the ASX price index was still 30 percent lower than its peak in November 2007. There is a general view that the growth of the Australian economy continues to be uneven, and a \"two-speed\" economy exists. This perception is partly due to the impact of natural disasters, such as the 2010-2011 Queensland floods, as well as the high Australian dollar.</p>" +
  //'<iframe src="https://data.oecd.org/chart/74X3" width="100%" height="645" style="border: 0" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true"><a href="https://data.oecd.org/chart/74X3" target="_blank">OECD Chart: Share prices, Total, 2015=100, Monthly, Jun 2006 – Dec 2010</a></iframe>' +
  '<p>In the chart below could see that in Oct, 2009, when the US and UK are facing the highest unemployement rate, the major cities shows the better performance. Especially for the cities in mining-rich states such as Perth (Western Australia) and Brisbane (Queensland) may have fared relatively well.</p>' +
  '<iframe src="city_unem_chart.html" width="100%" height="450px" style="border: 0"></iframe>';

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
      id: "california2",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter6,
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
      id: "texas",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter7,
      location: {
        center: [-119.42, 36.78],
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
    //YR
    {
      id: "Australia",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [151.2, -33.85],
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
      id: "Australia2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter9,
      location: {
        center: [155.2093, -33.8688],
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