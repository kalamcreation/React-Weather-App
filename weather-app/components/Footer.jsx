export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} WeatherApp — Built with Next.js & Tailwind CSS
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Weather data by{" "}
          <a
            href="https://open-meteo.com/"
            className="underline hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Open-Meteo
          </a>{" "}
          (CC BY 4.0)
        </p>
      </div>
    </footer>
  );
}