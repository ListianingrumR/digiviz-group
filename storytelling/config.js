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
  "<p><img src='img/lehmanbrothers.jpg'></p>" + "<hr>";
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
  '<iframe src="charts/homevacant.html" width="100%" height="500px" frameBorder="0"></iframe>' +
  "<p>Bridging to the USA (housing bubble, subprime mortgage)</p>";
// Housing Interactive Map
//'<div class="chart-container" data-aos="fade-up"></div>' +
//'<iframe id="housing" src="../housing/housing-foreclosure.html" height="800px" width="100%" frameBorder="0"></iframe>';

let divChapter6 =
  "<p><b>The United States Situation after the stock market crash</b></p>" + "<hr>" +
  '<iframe src="usa.html" width="100%" height="800px" frameBorder="0"></iframe>';

let divChapter7 =
  "<p><b>California Urbanised Area</b></p>" + "<hr>" +
  "<p>Here is the changing of Urbanised Area in California over 10 years from 2008-2018.</p>" +
  "<p>We can see there are some of urbanised area that are shrinked in the past decade." + "<hr>" +
  '<iframe src="swipe/urban.html" width="100%" height="800px" frameBorder="0"></iframe>';

// YR codes
// Impact of the Global Financial Crisis on Australia
//share price
let divChapter8 =
  "<p><b>Australia</b></p>" + "<hr>" +
  //"<p>Area 2023: 7,692,024 km²</p>" +
  //"<p>Total Population 2023 : 26,339,393 </p>" +
  "<p>The global financial crisis had a profound impact on countries and regions worldwide, including Australia, even though they were geographically distant. In Australia, the crisis led to a significant decline in stock market capitalization, with a loss of over A$771 billion, equivalent to 65% of the country's GDP in 2008. The household sector also experienced a sharp decline in net worth. As approximately 43% of adults in Australia own shares directly or indirectly, the drop in net worth was primarily caused by the decrease in the value of share portfolios due to stock market declines. Even by 2009, the ASX price index remained 30% below its peak in November 2007. The Australian economy has been perceived as having uneven growth, and a \"two-speed\" economy exists, partly due to natural disasters such as the 2010-2011 Queensland floods and the impact of a high Australian dollar.</p>" +
  '<iframe src="https://data.oecd.org/chart/74X3" width="100%" height="645" style="border: 0" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true"><a href="https://data.oecd.org/chart/74X3" target="_blank">OECD Chart: Share prices, Total, 2015=100, Monthly, Jun 2006 – Dec 2010</a></iframe>'

// unemployment rate
let divChapter9 =
  '<p>However, despite these challenges, Australia performed relatively well compared to the United Kingdom and the United States during the crisis. The employment situation in Australia remained favorable, as shown in the graph below. While the average OECD unemployment rate increased from 5.7% to 8.8% during the crisis and then decreased to 8.2% by Q2 2011, Australia\'s unemployment rate increased from 4.2% to a peak of 5.7% during the crisis and then fell to 4.9% by Q2 2011. Australia also had a lower long-term unemployment rate than the OECD average in 2011. This can be attributed to the fact that many employers opted to reduce working hours rather than laying off workers, resulting in an average reduction of around 3.5% in working hours. This approach was similar to that of Germany, where the labor market demonstrated greater resilience compared to other OECD countries.</p>' +

  '<iframe src="https://data.oecd.org/chart/74X2" width="100%" height="645" style="border: 0" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true"><a href="https://data.oecd.org/chart/74X2" target="_blank">OECD Chart: Unemployment rate, Total, % of labour force, Monthly, Jul 2006 – Jun 2010</a></iframe>'

// reasons on states
let divChapter10 =
  "<p>So, why did Australia perform well during the crisis? There are several key reasons\:</p>" +
  '<h4>1. Robust banking sector:</h4>' +
  "<p>Australia's banking sector was in a relatively strong position at the start of the crisis, characterized by sound lending standards, adequate capital levels, and profitable operations. This enabled Australian banks to navigate the crisis more effectively than their counterparts in many other countries.</p>" +
  '<h4>2. Effective policy response:</h4>' +
  "<p>The Australian government and the Reserve Bank of Australia(RBA) responded swiftly and decisively to the crisis.The RBA implemented significant interest rate cuts, and the government implemented a substantial fiscal stimulus package.These measures helped to stimulate demand in the economy during a time of severe stress. <br> <br>The share price analysis also indicates that Australian share prices continuously outperformed those of over 19 European countries during the market crash and subsequent recovery.</p>" +
  '<h4>3. Strong trade links with China:</h4>' +
  "<p>Australia benefited from its strong trade ties with China, which continued to experience rapid growth during the crisis.Demand from China for Australian commodities, particularly iron ore and coal, remained robust, providing crucial support to the Australian economy.</p >" +
  '<h4>4. Commodity boom:</h4>' +
  "<p><Australia\'s economy heavily relies on the mining sector, and the commodity boom that preceded the 2008 crisis helped cushion the Australian economy against the downturn. High commodity prices supported income and employment in the mining sector, which subsequently flowed through to the rest of the economy. <br> At the state level, mining - dominant states such as Western Australia experienced lower personal bankruptcy rates during the 2007 - 2008 financial year. </p > "

// reasons on cities
let divChapter11 =
  '<p>In addition, at the city level, it can be inferred that cities in mining-rich states such as Perth (Western Australia) and Brisbane (Queensland) fared relatively well in October 2009, which had the highest unemployment rate, due to the aforementioned reasons.</p>' +

  '<iframe src="city_unem_chart.html" width="100%" height="450px" style="border: 0"></iframe>'; +
    '<p>In summary, Australia\'s ability to weather the global financial crisis can serve as an inspiration and guide for future policymakers. By maintaining a resilient banking sector, implementing effective policies, fostering strong international trade relations, and diversifying the economy beyond commodities, Australia can strive to mitigate the impact of future crises and sustain stable economic growth.</p>'

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
        {
          layer: "gadm41-aus-1-349tki",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "state-bkrp-0708-cr0wbs",
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
      alignment: "center2",
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
          layer: "gadm41-aus-1-349tki",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "gadm41-aus-1-349tki",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Australia2",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter9,
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
          layer: "gadm41-aus-1-349tki",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "gadm41-aus-1-349tki",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Australia3",
      alignment: "right",
      hidden: false,
      chapterDiv: divChapter10,
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
          layer: "state-bkrp-0708-cr0wbs",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "state-bkrp-0708-cr0wbs",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "Australia4",
      alignment: "right",
      hidden: false,
      chapterDiv: divChapter11,
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
          layer: "gadm41-aus-1-349tki",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "gadm41-aus-1-349tki",
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