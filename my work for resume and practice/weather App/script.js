const apiKey = '800971bdbf218dbf79815f4079fd9207';
const input = document.getElementById('city-input');
const info = document.getElementById('weather-info');
const errorMsg = document.getElementById('error');
const cityNameEl = document.getElementById('city-name');
const descEl = document.getElementById('description');
const tempEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind-speed');

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    fetchWeather(input.value.trim());
  }
});

async function fetchWeather(location) {
  if (!location) return;
  
  info.classList.add('hidden');
  errorMsg.classList.add('hidden');

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=metric&appid=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    if (res.ok) {
      displayWeather(data);
    } else {
      showError();
    }
  } catch (e) {
    console.error(e);
    showError();
  }
}

function displayWeather(data) {
  cityNameEl.textContent = `${data.name}, ${data.sys?.country || ''}`;
  descEl.textContent = data.weather[0].description;
  tempEl.textContent = `${Math.round(data.main.temp)} °C`;
  humidityEl.textContent = data.main.humidity;
  windEl.textContent = data.wind.speed;

  info.classList.remove('hidden');
}

function showError() {
  errorMsg.classList.remove('hidden');
}
