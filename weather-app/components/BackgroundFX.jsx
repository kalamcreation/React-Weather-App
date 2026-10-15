"use client";

export default function BackgroundFX({ weatherCode }) {
  // Pick gradient based on weather code + theme
  const getGradient = () => {
    if (weatherCode === undefined) {
      return "from-sky-200 via-blue-100 to-indigo-200 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900";
    }
    if (weatherCode === 0 || weatherCode === 1) {
      return "from-amber-200 via-sky-200 to-blue-200 dark:from-indigo-950 dark:via-slate-900 dark:to-slate-950";
    }
    if ([2, 3, 45, 48].includes(weatherCode)) {
      return "from-slate-300 via-slate-200 to-blue-200 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950";
    }
    if ([51, 61, 63, 65, 80, 95].includes(weatherCode)) {
      return "from-slate-400 via-slate-300 to-blue-300 dark:from-slate-900 dark:via-blue-950 dark:to-slate-950";
    }
    return "from-sky-200 via-blue-100 to-indigo-200 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900";
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getGradient()}
                    transition-all duration-1000`}
      />

      {/* Floating blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full
                      bg-sky-400/30 dark:bg-indigo-500/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[35rem] h-[35rem] rounded-full
                      bg-indigo-400/30 dark:bg-cyan-500/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-[40%] right-[20%] w-[25rem] h-[25rem] rounded-full
                      bg-pink-300/20 dark:bg-purple-500/10 blur-3xl animate-float" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}