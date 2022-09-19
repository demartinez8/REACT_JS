import { useEffect, useState } from "react";
import { WeatherData } from "../interfaces/WeatherData";
import { DegreeSection } from "./DegreeSection";
import { DetailsTable } from "./DetailsTable";
import { Location } from "./Location";

export const WeatherContainer = ({
  fetchData,
  error,
}: {
  fetchData: any;
  error: string;
}) => {
  const [weather, setWeather] = useState<WeatherData>({
    city: "",
    country: "",
    temperature: 0,
    description: "",
    icon: "",
    humidity: "",
    feels: "",
    visibility: "",
    pressure: "",
    longitude: "",
    latitude: "",
    windSpeed: "",
  });

  useEffect(() => {
    if (fetchData)
      setWeather({
        city: fetchData.name,
        country: fetchData.sys.country,
        temperature: Math.floor(fetchData.main.temp - 273),
        description: fetchData.weather[0].description,
        icon: `http://openweathermap.org/img/wn/${fetchData.weather[0].icon}@2x.png`,
        humidity: fetchData.main.humidity + "%",
        feels: Math.floor(fetchData.main.feels_like - 273) + "°C",
        visibility: fetchData.visibility + "m",
        pressure: fetchData.main.pressure + "hPa",
        longitude: fetchData.coord.lon,
        latitude: fetchData.coord.lat,
        windSpeed: fetchData.wind.speed + "m/s",
      });
  }, [fetchData]);

  return (
    <main className="w-96 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg">
      {error === "" ? (
        <div className="flex w-full items-center flex-col p-8">
            <Location data={weather} />
            <DegreeSection data={weather} />
            <DetailsTable data={weather} />
        </div>
      ) : (
        <div className="flex justify-center items-center h-56 text-white font-bold text-2xl p-4 text-center">
            Por favor revise la conexión a internet 🛸
        </div>
      )}
      
    </main>
  );
};
