// lib/weather.js
export async function getWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
  
  const res = await fetch(url, { next: { revalidate: 600 } }); // 10 min cache
  if (!res.ok) throw new Error("Failed to fetch weather data");
  return res.json();
}

export async function getCoordinates(city) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("City not found");
  const data = await res.json();
  if (!data.results || data.results.length === 0) throw new Error("City not found");
  return data.results[0];
}

export function getWeatherDescription(code) {
  const codes = {
    0: "Clear sky ☀️", 1: "Mainly clear 🌤️", 2: "Partly cloudy ⛅",
    3: "Overcast ☁️", 45: "Foggy 🌫️", 48: "Depositing rime fog 🌫️",
    51: "Light drizzle 🌦️", 61: "Slight rain 🌧️", 63: "Moderate rain 🌧️",
    65: "Heavy rain 🌧️", 71: "Slight snow ❄️", 80: "Rain showers 🌦️",
    95: "Thunderstorm ⛈️",
  };
  return codes[code] || "Unknown";
}