function refreshWeather(response) {
  let tempratureElement = document.querySelector("temprature");
  let temprature = response.data.temprature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);


  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML =  formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = '${response.data.temprature.humidty}%';
  windSpeedElement.innerHTML = '${response.data.wind.speed}'km/h;
  tempratureElement.innerHTML = Math.round(temprature);
}

function formatDate(date) {
    let day = date.getDay();
    let minutes = date.getMinutes();
    let hours = date.gethours();
    let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"];

        let day = days[date.getDay()];

        if (minutes <10) {
            minutes = '0${minutes}';
        }
    return '${day} ${hours} ${minutes}';
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
