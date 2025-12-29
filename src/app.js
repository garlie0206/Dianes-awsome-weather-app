function refreshWeather(response) {
  let tempratureElement = document.querySelector("temprature");
  let temprature = response.data.temprature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  tempratureElement.innerHTML = Math.round(temprature);
}

function searchCity(city) {
  let apiKey = "ob966ee5c00a195346b3f35b10dtd623";
  let apiUrl =
    'https://api.shecodes.io/weather/v1/current?query={query}${city}&key=${apiKey}&units=metric"';
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Liverpool");
