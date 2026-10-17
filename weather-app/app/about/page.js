"use client";
import { motion } from "framer-motion";
import BackgroundFX from "@/components/BackgroundFX";

export default function About() {
  return (
    <>
      <BackgroundFX />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center gradient-text"
        >
          About WeatherApp
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-10 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          <p>
            WeatherApp is a lightweight, modern weather app built with{" "}
            <strong className="text-sky-600 dark:text-cyan-300">Next.js 14</strong> and{" "}
            <strong className="text-sky-600 dark:text-cyan-300">Tailwind CSS</strong>. Data is
            sourced from the free{" "}
            <a
              href="https://open-meteo.com/"
              className="text-sky-600 dark:text-cyan-300 underline hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              Open-Meteo API
            </a>{" "}
            — no keys, no registration, no limits.
          </p>
          <p>
            The interface is designed with <strong>glassmorphism</strong>,{" "}
            <strong>animated gradients</strong>, and full support for both dark and light themes.
            Every interaction is smooth, thanks to Framer Motion.
          </p>
          <p>
            It's a demonstration of how a small Next.js app can deliver a premium, fast, and
            responsive weather experience.
          </p>
        </motion.div>
      </div>
    </>
  );
}