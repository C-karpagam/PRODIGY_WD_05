// API key for OpenWeatherMap (replace with your own key)
const apiKey = '62b213683df6934cc0f965aad463ab1e';

// Function to fetch weather data
function getWeather() {
    // Get the city entered by the user
    const city = document.getElementById('city').value;

    // Check if the city input is empty
    if (city === '') {
        alert('Please enter a city');
        return;
    }

    // Fetch weather data from OpenWeatherMap API
    fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                // Display error if city is not found
                document.getElementById('error').style.display = 'block';
                document.getElementById('weather-info').style.display = 'none';
            } else {
                // Hide error message and display weather info
                document.getElementById('error').style.display = 'none';
                document.getElementById('weather-info').style.display = 'block';

                // Display the weather data
                document.getElementById('city-name').innerText = ${data.name}, ${data.sys.country};
                document.getElementById('temperature').innerText = Temperature: ${data.main.temp}°C;
                document.getElementById('description').innerText = Weather: ${data.weather[0].description};
                document.getElementById('humidity').innerText = Humidity: ${data.main.humidity}%;
                document.getElementById('wind-speed').innerText = Wind Speed: ${data.wind.speed} m/s;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('error').style.display = 'block';
            document.getElementById('weather-info').style.display = 'none';
        });
}
