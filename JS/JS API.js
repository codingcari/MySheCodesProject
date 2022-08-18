let h3 = document.querySelector("h3");
let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let currentDay = days[now.getDay()];
h3.innerHTML = `${currentDay}, ${hours}:${minutes}`;

function showTemp(response) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `⛅ ${Math.round(response.data.main.temp)}°C`;
}

function searchCity(city) {
  let apiKey = "f4bd27cfd084b8dc337ad671b0b78f70";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appi=${apiKey}`).then(showTemp);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input").value;
  searchCity(searchInput);
}

let form = document.querySelector("#search");
form.addEventListener("submit", search);