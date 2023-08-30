const apiKey = 'YOUR_API_KEY';
const city = 'Munich';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    const weatherInfo = `Current weather in ${city}: ${temperature}°C, ${description}`;
    document.getElementById('weather-info').textContent = weatherInfo;
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
