"use client";

import { useEffect, useState } from "react";
import { CloudSun, Heart } from "lucide-react";

export default function Footer() {

  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300">
          <CloudSun className="h-5 w-5 text-sky-500 dark:text-cyan-300" />
          <span className="font-bold">WeatherApp</span>
          <span className="text-xs font-medium opacity-70">
            © {year}
          </span>
        </div>

        <p className="text-xs font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1">
          Built with <Heart className="h-3 w-3 text-pink-500 fill-pink-500" /> using Next.js · Data by{" "}
          <a
            href="https://open-meteo.com/"
            className="underline hover:text-sky-600 dark:hover:text-sky-400"
            target="_blank"
            rel="noreferrer"
          >
            Open-Meteo
          </a>
        </p>
      </div>
    </footer>
  );
}