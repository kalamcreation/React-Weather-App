import { getWeatherDescription } from "@/lib/weather";

export default function WeatherCard({ data, city }) {
  if (!data) return null;

  const current = data.current;
  const stats = [
    { label: "Temperature", value: `${current.temperature_2m}°C`, icon: "🌡️" },
    { label: "Humidity", value: `${current.relative_humidity_2m}%`, icon: "💧" },
    { label: "Wind Speed", value: `${current.wind_speed_10m} km/h`, icon: "💨" },
    { label: "Time", value: new Date(current.time).toLocaleString(), icon: "🕐" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{city}</h2>
        <p className="text-gray-500 mt-1">
          {getWeatherDescription(current.weather_code)}
        </p>
        <p className="text-5xl font-bold text-blue-600 mt-3">
          {current.temperature_2m}°C
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="bg-blue-50 rounded-xl p-4 text-center"
          >
            <div className="text-2xl">{icon}</div>
            <div className="text-xs text-gray-500 mt-1">{label}</div>
            <div className="font-semibold text-gray-800 text-sm mt-1">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}