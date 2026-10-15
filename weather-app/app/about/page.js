export const metadata = { title: "About — WeatherApp" };

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About WeatherApp</h1>
      <div className="bg-white rounded-2xl shadow p-8 space-y-4 text-gray-700 leading-relaxed">
        <p>
          WeatherApp is a lightweight weather application built with{" "}
          <strong>Next.js 14</strong> and <strong>Tailwind CSS</strong>. It
          fetches real-time weather data from the free{" "}
          <a
            href="https://open-meteo.com/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noreferrer"
          >
            Open-Meteo API
          </a>
          .
        </p>
        <p>
          The app allows users to search any city worldwide and instantly view
          current temperature, humidity, wind speed, and weather conditions —
          all without any API key or sign-up.
        </p>
        <p>
          The goal is to demonstrate a clean, responsive, and fast weather
          interface using modern web technologies.
        </p>
      </div>
    </div>
  );
}