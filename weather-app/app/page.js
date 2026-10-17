"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import BackgroundFX from "@/components/BackgroundFX";
import { getWeather, getCoordinates } from "@/lib/weather";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [loading, setLoading] = useState(true); // শুরুতে true রাখা হলো
  const [error, setError] = useState("");

  // ১. নির্দিষ্ট স্থানাঙ্ক (Latitude, Longitude) থেকে ওয়েদার আনা
  const fetchWeatherByCoords = async (lat, lon, name) => {
    setLoading(true);
    setError("");
    try {
      const data = await getWeather(lat, lon);
      setWeather(data);
      setCityName(name);
    } catch (err) {
      setError(err.message || "Something went wrong fetching weather");
    } finally {
      setLoading(false);
    }
  };

  // ২. ইউজারের সার্চ করা শহরের ওয়েদার আনা
  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const geo = await getCoordinates(city);
      const data = await getWeather(geo.latitude, geo.longitude);
      setWeather(data);
      setCityName(`${geo.name}, ${geo.country}`);
    } catch (err) {
      setError(err.message || "City not found");
    } finally {
      setLoading(false);
    }
  };

  // ৩. পেজ লোড হলে কারেন্ট লোকেশন ডিটেক্ট করা
  useEffect(() => {
    if (!navigator.geolocation) {
      // ব্রাউজার সাপোর্ট না করলে ডিফল্ট ঢাকা
      handleSearch("Dhaka");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // লোকেশন পাওয়া গেলে
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude, "My Location");
      },
      (err) => {
        // ইউজার পারমিশন ব্লক করলে বা এরর হলে ডিফল্ট ঢাকা
        console.log("Location denied or error:", err.message);
        handleSearch("Dhaka");
      },
      { timeout: 10000 } // ১০ সেকেন্ড পর টাইমআউট
    );
  }, []);

  return (
    <>
      <BackgroundFX weatherCode={weather?.current?.weather_code} />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-slate-700 dark:text-slate-200 mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
            Free · Real-Time
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
          >
            <span className="gradient-text">Check Weather</span>
            <br />
            <span className="text-slate-800 dark:text-white">Anywhere on Earth 🌍</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto"
          >
            Get instant temperature, humidity, and wind speed for any city —
            beautifully presented.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <SearchBar onSearch={handleSearch} loading={loading} />
          </motion.div>

          {error && (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-sm"
            >
              ⚠️ {error}
            </motion.p>
          )}
        </section>

        {/* Weather Card Display */}
        <section className="mb-16">
          {loading && !weather ? (
            // লোডিং অবস্থায় সুন্দর একটা ইফেক্ট
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Fetching your location's weather...</p>
            </div>
          ) : weather ? (
            <WeatherCard data={weather} city={cityName} />
          ) : null}
        </section>
      </div>
    </>
  );
}