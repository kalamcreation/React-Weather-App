"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, CloudSun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    // shadow-sm এবং border-slate-200 যোগ করা হয়েছে Light mode এর জন্য
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <CloudSun className="h-7 w-7 text-sky-500 dark:text-cyan-300 group-hover:rotate-12 transition-transform duration-500" />
          <span className="text-xl font-extrabold text-slate-900 dark:text-white">
            WeatherApp
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${active
                      ? "text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-md shadow-sky-500/30"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                    }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden text-slate-800 dark:text-slate-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 px-4"
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-white/5
                    ${pathname === href ? "font-bold text-sky-600 dark:text-cyan-300" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}