"use client";
import { motion } from "framer-motion";
import BackgroundFX from "@/components/BackgroundFX";
import { Thermometer, Droplets, Wind, MapPin, Clock, Zap } from "lucide-react";

const services = [
  { icon: Thermometer, title: "Real-Time Temperature", desc: "Live temperature in Celsius for any city worldwide.", color: "from-orange-400 to-red-500" },
  { icon: Droplets, title: "Humidity Tracking", desc: "Relative humidity readings updated in real time.", color: "from-sky-400 to-blue-600" },
  { icon: Wind, title: "Wind Speed", desc: "Current wind speed in km/h for your selected location.", color: "from-teal-400 to-cyan-500" },
  { icon: MapPin, title: "Global City Search", desc: "Search any city worldwide with Open-Meteo geocoding.", color: "from-pink-400 to-rose-500" },
  { icon: Clock, title: "Accurate Time Intervals", desc: "Weather data time-stamped to your local timezone.", color: "from-violet-400 to-purple-600" },
  { icon: Zap, title: "No API Key Needed", desc: "Completely free — no signup, no credit card, no limits.", color: "from-yellow-400 to-orange-500" },
];

export default function Services() {
  return (
    <>
      <BackgroundFX />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-3"
        >
          Our Services
        </motion.h1>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12">
          Everything you need to check the weather — fast and free.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-3xl p-6 card-hover group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} grid place-items-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}