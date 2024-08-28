# Weather App

## Overview

This simple Weather App allows users to retrieve current weather information and a 5-day forecast for a specific city. The application uses the OpenWeatherMap API to fetch weather data and display it in a user-friendly interface.

## Website

<https://weather-website-app.vercel.app/>

## Features

- **Current Weather Information:** Get real-time weather updates, including temperature, humidity, wind speed, and weather description.

- **5-Day Forecast:** View a 5-day weather forecast with temperature, weather conditions, and icons representing the forecast.

- **Dynamic Background:** The application dynamically updates the background image based on the searched city, providing a visually appealing experience.

- **Geolocation Support:** The app can automatically fetch the weather data based on the user's current location.

- **Responsive Design:** The app is designed to be responsive and works well on various screen sizes.

## How to Use

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/patelpratyush/Weather-App
   ```

2. Navigate to the project directory and open the **index.html** file in your preferred web browser.

3. Enter the name of the city in the search bar and press the **"Search"** button or hit **"Enter"** to fetch the weather information for the entered city.

4. Alternatively, click the location button to get weather information for your current location automatically.

## Project Structure

- index.html: The main HTML file containing the application's structure.

- style.css: The stylesheet that defines the app's visual style and layout.

- script.js: The JavaScript file containing the Weather App logic, including the API integration, DOM manipulation, and geolocation features.

## Dependencies

- OpenWeatherMap API: The app uses the OpenWeatherMap API to retrieve weather and forecast data. Make sure to replace the **apiKey** in the weather object with your own API key.

## Project Structure

```plaintext
.
├── README.md
├── index.html
├── script.js
└── style.css
```


## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the repository**
2. **Create a new branch**

   ```bash
   git checkout -b feature-your-feature-name
   ```

3. **Make your changes and commit them**

   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to the branch**

   ```bash
   git push origin feature-your-feature-name
   ```

5. **Open a Pull Request**: We will review your changes and merge them into the main branch.
