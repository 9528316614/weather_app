const apiKey = 'c28a1d667eff6a93539aa686331b6f8c';  

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById('weatherResult').innerHTML = "City not found.";
            } else {
                document.getElementById('weatherResult').innerHTML = `
                    <h3>${data.name}, ${data.sys.country}</h3>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
