"use client";
import { useState } from "react";
import { Search as SearchIcon, Loader2 } from "lucide-react";

export default function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() && !loading) onSearch(city.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 max-w-lg mx-auto glass rounded-full p-2 shadow-xl"
    >
      <div className="flex items-center pl-3 text-slate-400">
        <SearchIcon className="h-5 w-5" />
      </div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city... e.g. Dhaka, London"
        className="flex-1 bg-transparent px-2 py-2 text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {loading ? "Searching" : "Search"}
      </button>
    </form>
  );
}