"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import BackgroundFX from "@/components/BackgroundFX";
import { getWeather, getCoordinates } from "@/lib/weather";
import { Sparkles, Zap, Globe } from "lucide-react";

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
    <>
      <BackgroundFX weatherCode={weather?.current?.weather_code} />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero */}
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

        {/* Weather Card */}
        {weather && (
          <section className="mb-16">
            <WeatherCard data={weather} city={cityName} />
          </section>
        )}

        {/* Feature Highlights */}
        {!weather && (
          <section className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Real-time data from Open-Meteo",
                color: "from-yellow-400 to-orange-500",
              },
              {
                icon: Globe,
                title: "Global Coverage",
                desc: "Any city, any country worldwide",
                color: "from-sky-400 to-blue-600",
              },
              {
                icon: Sparkles,
                title: "Beautiful UI",
                desc: "Glassmorphism with dark/light mode",
                color: "from-pink-400 to-purple-600",
              },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div
                  className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${color} grid place-items-center mb-4 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white mb-1">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {desc}
                </p>
              </motion.div>
            ))}
          </section>
        )}
      </div>
    </>
  );
}