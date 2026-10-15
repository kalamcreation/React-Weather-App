export const metadata = { title: "Services — WeatherApp" };

const services = [
  { icon: "🌡️", title: "Real-Time Temperature", desc: "Live temperature in Celsius for any city worldwide." },
  { icon: "💧", title: "Humidity Tracking", desc: "Relative humidity readings updated in real time." },
  { icon: "💨", title: "Wind Speed", desc: "Current wind speed in km/h for your selected location." },
  { icon: "📍", title: "Global City Search", desc: "Search any city across the world using Open-Meteo geocoding." },
  { icon: "⏱️", title: "Accurate Time Intervals", desc: "Weather data time-stamped to your local timezone." },
  { icon: "⚡", title: "No API Key Needed", desc: "Completely free — no signup, no credit card, no limits." },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Our Services
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Everything you need to check the weather — fast and free.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-4xl mb-3">{icon}</div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}