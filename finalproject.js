// country codes
let countries = {
  FR: "France",
  IT: "Italy",
  ES: "Spain",
  TR: "Turkey",
  DE: "Germany",
  PL: "Poland",
  GB: "United Kingdom",
  RU: "Russia",
  CZ: "Czech Republic",
  PT: "Portugl",
  NL: "Netherlands",
  BE: "Belgium",
  MA: "Morocco",
  PH: "Philipines",
  US: "United States",
  RO: "Romania",
  DZ: "Algeria",
  NG: "Nigeria",
  CH: "Switzerland",
  HU: "Hungary",
  TH: "Thailand",
  SE: "Sweden",
  ID: "Indonesia",
  IN: "India",
  UA: "Ukraine",
  MY: "Malaysia",
  TN: "Tunisia",
  SA: "Saudi Arabia",
  GR: "Greece",
  CI: "Ivory Coast",
  AT: "Austria",
  ZA: "South Africa",
  KR: "South Korea",
  CN: "China",
  RS: "Serbia",
  JP: "Japan",
  EG: "Egypt",
  SK: "Slovakia",
  DK: "Denmark",
  FI: "Finland",
  CM: "Cameroon",
  IR: "Iran",
  AR: "Argentina",
  CA: "Canada",
  SG: "Singapore",
  PK: "Pakistan",
  GH: "Ghana",
  LB: "Lebanon",
  IE: "Ireland",
  AO: "Angola",
  NO: "Norway",
  BY: "Belarus",
  BR: "Brazil",
  MX: "Mexico",
  CO: "Colombia",
  KE: "Kenya",
  CL: "Chile",
  KW: "Kuwait",
  AL: "Albania",
  VE: "Venezuela",
  RE: "Reunion",
  BA: "Bosnia and Herzegovina",
  IL: "Israel",
  TW: "Taiwan",
  SI: "Slovenia",
  KZ: "Kazakhstan",
  PE: "Peru",
  AZ: "Azerbaijan",
  AE: "United Arab Emirates",
  CY: "Cyprus",
  LT: "Lithuania",
  DO: "Dominican Republic",
  JO: "Jordan",
  MD: "Moldova",
  BJ: "Benin",
  BG: "Bulgaria",
  CD: "Democratic Republic of the Congo",
  HR: "Croatia",
  LV: "Latvia",
  HK: "Hong Kong",
  MZ: "Mozambique",
  AU: "Australia",
  LU: "Luxembourg",
  UG: "Uganda",
  ML: "Mali",
  BF: "Burkina Faso",
  MU: "Mauritius",
  OM: "Oman",
  TG: "Togo",
  QA: "Qatar",
  MK: "Macedonia",
  MG: "Madagascar",
  VN: "Vietnam",
  GA: "Gabon",
  EE: "Estonia",
  IQ: "Iraq",
  MT: "Malta",
  BH: "Bahrain",
  TZ: "Tanzania",
  EC: "Ecuador",
  GE: "Georgia",
  AM: "Armenia",
  SD: "Sudan",
  ET: "Ethiopia",
  MM: "Myanmar",
  ME: "Montenegro",
  SY: "Syria",
  UZ: "Uzbekistan",
  ZW: "Zimbabwe",
  DJ: "Djibouti",
  LK: "Sri Lanka",
  BD: "Bangladesh",
  SH: "Saint Helena",
  BW: "Botswana",
  CV: "Cape Verde",
  BO: "Bolivia",
  YE: "Yemen",
  RW: "Rwanda",
  IS: "Iceland",
  LY: "Libya",
  NE: "Niger",
  AD: "Andorra",
  GM: "Gambia",
  CG: "Republic of the Congo",
  ZM: "Zambia",
  AF: "Afghanistan",
  NA: "Namibia",
  MR: "Mauritania",
  UY: "Uruguay",
  CR: "Costa Rica",
  KG: "Kyrgyzstan",
  PA: "Panama",
  NP: "Nepal",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  MQ: "Martinique",
  SC: "Seychelles",
  CU: "Cuba",
  NZ: "New Zealand",
  GT: "Guatemala"
};

var ageDiv;
var genderDiv;
var nationalityDiv;
var imageDiv;
var infoDiv;



// initialize variables after page loads
window.onload = function() {
  ageDiv = document.getElementById("age");
  genderDiv = document.getElementById("gender");
  nationalityDiv = document.getElementById("nationality");
  imageDiv = document.getElementById("image");
  infoDiv = document.getElementById("info");
}; // window.onload

// get joke
function fetchData() {
  var search = document.getElementById("search").value;

  fetch("https://api.agify.io/?name=" + search)
    .then(response => response.json())
    .then(data => changeAge(data));

  fetch("https://api.genderize.io/?name=" + search)
    .then(response => response.json())
    .then(data => changeGender(data));

  fetch("https://api.nationalize.io/?name=" + search)
    .then(response => response.json())
    .then(data => changeNationality(data));

  fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => changeImage(data));

  fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => changeInfo(data));
} // window.onload

function changeImage(data) {
  console.log(data);
  imageDiv.innerHTML =
    "<h2></h2><img src='" + data.results[0].picture.large + "'>";
} // changeJoke

// change the joke displayed
function changeAge(data) {
  console.log(data);
  ageDiv.innerHTML =
    "Hey there, my name is " +
    data.name +
    "! <br> <br> <h2> age of your character:</h2>" +
    data.age;
} // changeJoke

function changeGender(data) {
  console.log(data);
  genderDiv.innerHTML =
    "<h2> gender of your character:</h2>" +
    data.gender +
    " (probability: " +
    data.probability +
    "%)";
} // changeJoke

function changeInfo(data) {
  console.log(data);
  infoDiv.innerHTML =
    "<h2> your character lives in: </h2> <p>" +
    data.results[0].location.city +
    ", " +
    data.results[0].location.country +
    "</p>";
} // changeJoke

function changeNationality(data) {
  console.log(data);
  nationalityDiv.innerHTML =
    "<h2> top three possible nationalities of your character:</h2>" +
    countries[data.country[0].country_id] +
    "<br>" +
    countries[data.country[1].country_id] +
    "<br>" +
    countries[data.country[2].country_id];
} // changeJoke
