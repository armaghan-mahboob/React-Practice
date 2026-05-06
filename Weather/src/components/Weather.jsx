import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const weatherEmojis = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Drizzle: "🌦️",
    Haze: "🌫️",
  };

  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        console.log(data);
        setWeatherData(data);
      } else {
        alert("Failed: " + data.message);
        return;
      }
    } catch (error) {
      alert("Error fetching weather data:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-400 via-blue-600 to-blue-900 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl border border-white rounded-3xl p-7 shadow-2xl">
        {/* Header */}
        <p className="text-center text-white/60 text-xs font-semibold tracking-[0.18em] uppercase mb-6">
          Weather
        </p>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-5 py-1.5 focus-within:bg-white/25 focus-within:ring-2 focus-within:ring-white/20 transition-all duration-200">
          <input
            type="search"
            placeholder="Search city..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/50 text-sm font-medium"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && city) fetchWeather(city);
            }}
          />
          <button
            onClick={() => {
              if (city) {
                fetchWeather(city);
              } else {
                alert("Please enter a city name.");
              }
            }}
            className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-sm hover:bg-white/35 active:scale-95 transition-all duration-150 shrink-0 cursor-pointer"
          >
            🔍
          </button>
        </div>

        {/* Main display */}
        <div className="text-center py-10 text-white">
          <span className="text-8xl leading-none block">
            {weatherData ? weatherEmojis[weatherData.weather[0].main] : "🌤️"}
          </span>
          <p className="text-8xl font-bold tracking-tighter leading-none mt-5 mb-3">
            {weatherData ? Math.round(weatherData.main.temp - 273.15) : "--"}°
          </p>
          <p className="text-2xl font-medium text-white/90">
            {weatherData ? weatherData.name : "Your City"}
          </p>
          <p className="text-sm text-white/55 mt-1 capitalize">
            {weatherData
              ? weatherData.weather[0].description
              : "Search a city to begin"}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/15 mb-5" />

        {/* Stats */}
        <div className="flex gap-3">
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-1 text-white">
            <span className="text-2xl">💧</span>
            <span className="text-xl font-semibold">
              {weatherData ? weatherData.main.humidity : "--"}%
            </span>
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Humidity
            </span>
          </div>
          <div className="flex-1 bg-white/10 border border-white/20 rounded-2xl p-4 flex flex-col items-center gap-1 text-white">
            <span className="text-2xl">💨</span>
            <span className="text-xl font-semibold">
              {weatherData ? weatherData.wind.speed : "--"}
            </span>
            <span className="text-[11px] font-medium text-white/50 uppercase tracking-widest">
              Km/h Wind
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
