"use client";

import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudLightning, CloudSnow, CloudFog, Wind, Droplets, MapPin, Loader2 } from "lucide-react";
import { Card } from "./ui/Card";

type WeatherVariant = "compact" | "detailed";

interface WeatherWidgetProps {
  variant?: WeatherVariant;
}

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  code: number;
}

export default function WeatherWidget({ variant = "compact" }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Pathankot Coordinates: 32.2689° N, 75.6493° E
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=32.2689&longitude=75.6493&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code");
        const data = await res.json();
        
        if (data && data.current) {
          setWeather({
            temperature: Math.round(data.current.temperature_2m),
            humidity: Math.round(data.current.relative_humidity_2m),
            windSpeed: Math.round(data.current.wind_speed_10m),
            code: data.current.weather_code
          });
        }
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
    // Refresh every 30 mins
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getWeatherDetails = (code: number) => {
    if (code === 0) return { icon: Sun, label: "Clear Sky", color: "text-amber-500" };
    if (code >= 1 && code <= 3) return { icon: Cloud, label: "Partly Cloudy", color: "text-slate-400" };
    if (code >= 45 && code <= 48) return { icon: CloudFog, label: "Foggy", color: "text-slate-400" };
    if (code >= 51 && code <= 67) return { icon: CloudRain, label: "Rainy", color: "text-blue-500" };
    if (code >= 71 && code <= 77) return { icon: CloudSnow, label: "Snow", color: "text-sky-300" };
    if (code >= 95 && code <= 99) return { icon: CloudLightning, label: "Thunderstorm", color: "text-purple-500" };
    return { icon: Sun, label: "Sunny", color: "text-amber-500" };
  };

  if (loading) {
    if (variant === "compact") {
      return (
        <div className="flex items-center gap-1.5 text-slate-300">
          <Loader2 className="h-3 w-3 animate-spin" />
          <span>Loading...</span>
        </div>
      );
    }
    return (
      <div className="flex items-center justify-center p-8 bg-slate-50 border border-slate-100 rounded-3xl animate-pulse">
        <Loader2 className="h-6 w-6 animate-spin text-slate-300" />
      </div>
    );
  }

  if (!weather) {
    return null; // Don't render anything if fetch fails
  }

  const details = getWeatherDetails(weather.code);
  const Icon = details.icon;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors cursor-default" title={details.label}>
        <Icon className={`h-3 w-3 ${details.color}`} />
        <span className="font-semibold">{weather.temperature}°C</span>
        <span className="opacity-70 ml-1">Pathankot</span>
      </div>
    );
  }

  // Detailed Variant
  return (
    <Card className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-slate-900 to-indigo-900 p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 text-white">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Icon className="h-40 w-40" />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-indigo-300 mb-6 font-semibold uppercase tracking-wider text-xs">
          <MapPin className="h-3.5 w-3.5" />
          Pathankot, Punjab
        </div>
        
        <div className="flex items-end gap-4 mb-2">
          <div className="text-6xl sm:text-7xl font-extrabold tracking-tighter">
            {weather.temperature}°
          </div>
          <div className="mb-2">
            <div className={`flex items-center gap-2 text-lg font-medium ${details.color}`}>
              <Icon className="h-5 w-5" />
              {details.label}
            </div>
            <div className="text-slate-400 text-sm">Real-time Weather</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-indigo-500/20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
              <Droplets className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-indigo-300 uppercase tracking-wider">Humidity</p>
              <p className="text-lg font-bold">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
              <Wind className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-indigo-300 uppercase tracking-wider">Wind Speed</p>
              <p className="text-lg font-bold">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
