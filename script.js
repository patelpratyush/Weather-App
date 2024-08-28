let weather = {
  apiKey: "78125f9c7999bbf68ec61ad4869e37d9",
  fetchWeather: function (city) {
    console.log(`Fetching weather for city: ${city}`);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
    .then((response) => {
      console.log('Weather API response:', response);
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather found.");
      }
      return response.json();
    })
    .then((data) => {
      console.log('Weather data:', data);
      this.displayWeather(data);
      this.fetchForecast(data.name); // Fetch the 5-day forecast
    })
    .catch((error) => console.error("Error fetching weather data:", error));
  },
  fetchForecast: function (city) {
    console.log(`Fetching forecast for city: ${city}`);
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
    .then((response) => {
      console.log('Forecast API response:', response);
      if (!response.ok) {
        alert("No forecast found.");
        throw new Error("No forecast found.");
      }
      return response.json();
    })
    .then((data) => {
      console.log('Forecast data:', data);
      this.displayForecast(data);
    })
    .catch((error) => console.error("Error fetching forecast data:", error));
  },
  displayWeather: function (data) {
    console.log('Displaying weather data:', data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  displayForecast: function (data) {
    console.log('Displaying forecast data:', data);
    const forecastContainer = document.querySelector(".forecast");
    forecastContainer.innerHTML = ""; // Clear previous data

    data.list.forEach((item, index) => {
      if (index % 8 === 0) { // Every 8th entry is approximately 24 hours apart
        const { dt_txt } = item;
        const { icon, description } = item.weather[0];
        const { temp } = item.main;
        const forecastItem = document.createElement("div");
        forecastItem.classList.add("forecast-item");
        forecastItem.innerHTML = `
          <div class="forecast-date">${new Date(dt_txt).toLocaleDateString()}</div>
          <img src="https://openweathermap.org/img/wn/${icon}.png" alt="" class="forecast-icon" />
          <div class="forecast-temp">${temp}°C</div>
          <div class="forecast-description">${description}</div>
        `;
        forecastContainer.appendChild(forecastItem);
      }
    });
  },
  search: function () {
    console.log('Searching for weather with input value:', document.querySelector(".search-bar").value);
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
  getLocationWeather: function () {
    console.log('Attempting to get user location');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('User location:', position.coords);
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${this.apiKey}`;
          console.log('Fetching weather data from URL:', url);
          fetch(url)
          .then((response) => {
            console.log('Weather API response for location:', response);
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data) => {
            console.log('Weather data for location:', data);
            this.displayWeather(data);
            this.fetchForecast(data.name); // Fetch the 5-day forecast
          })
          .catch((error) => console.error("Error fetching weather data for location:", error));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    weather.search();
  }
});

document.querySelector("#location-btn").addEventListener("click", function () {
  weather.getLocationWeather();
});

// // Fetch weather for a default city initially
// weather.fetchWeather("Jersey City");