"use client";
import { getWeatherDescription } from "@/lib/weather";
import { motion } from "framer-motion";
import { Thermometer, Droplets, Wind, Clock, MapPin } from "lucide-react";

export default function WeatherCard({ data, city }) {
  if (!data) return null;
  const current = data.current;

  const stats = [
    { label: "Temperature", value: `${current.temperature_2m}°C`, icon: Thermometer, color: "from-orange-400 to-red-500" },
    { label: "Humidity", value: `${current.relative_humidity_2m}%`, icon: Droplets, color: "from-sky-400 to-blue-500" },
    { label: "Wind Speed", value: `${current.wind_speed_10m} km/h`, icon: Wind, color: "from-teal-400 to-cyan-500" },
    { label: "Time", value: new Date(current.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), icon: Clock, color: "from-violet-400 to-purple-500" },
  ];

  const description = getWeatherDescription(current.weather_code);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass rounded-3xl p-8 max-w-2xl mx-auto relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-sky-400/30 to-indigo-500/30 blur-3xl" />

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 mb-2">
            <MapPin className="h-4 w-4" />
            <h2 className="text-xl font-bold">{city}</h2>
          </div>

          <p className="text-6xl mb-3 animate-float inline-block">{description.split(" ").pop()}</p>
          <p className="text-slate-600 dark:text-slate-300 capitalize">
            {description.replace(/[^\w\s]/g, "").trim()}
          </p>

          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            className="text-6xl md:text-7xl font-extrabold gradient-text mt-4"
          >
            {current.temperature_2m}°C
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="card-hover glass rounded-2xl p-4 text-center"
            >
              <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${color} grid place-items-center mb-2 shadow-lg`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                {label}
              </div>
              <div className="font-bold text-slate-800 dark:text-white text-sm mt-1">
                {value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}