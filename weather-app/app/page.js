"use client";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import { getWeather, getCoordinates } from "@/lib/weather";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const geo = await getCoordinates(city);
      const data = await getWeather(geo.latitude, geo.longitude);
      setWeather(data);
      setCityName(`${geo.name}, ${geo.country}`);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Check Weather Anywhere 🌍
        </h1>
        <p className="text-gray-600 mb-6">
          Get real-time temperature, humidity, and wind speed for any city.
        </p>
        <SearchBar onSearch={handleSearch} loading={loading} />
      </section>

      {error && (
        <p className="text-center text-red-600 mb-6">{error}</p>
      )}

      {weather && <WeatherCard data={weather} city={cityName} />}

      <section className="mt-16 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">About This App</h2>
        <p className="text-gray-600 leading-relaxed">
          This weather app is built using <strong>Next.js</strong> and{" "}
          <strong>Tailwind CSS</strong>, powered by the free{" "}
          <strong>Open-Meteo API</strong>. It provides real-time weather
          information without requiring any API key or registration.
        </p>
      </section>
    </div>
  );
}