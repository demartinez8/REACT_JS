import { FormEvent, useEffect, useState } from "react";
import { getWaetherByCoords, getWaetherBySearch } from "./api/fetchWeather";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer";

function App() {
  const [fetchData, setFetchData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWaetherByCoords(LAT, LON);
        setFetchData(data);
      } catch (err) {
        setError("Por favor revise la conexión a internet 🛸");
      }
    });
  }, []);

  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");

    try {
      const data = await getWaetherBySearch(CITY);

      if(data === "404"){
        setError("No se encontró la ciudad 👻");
      }else if(data === "400"){
        setError("Por favor ingrese el nombre de la ciudad 👽");
      }else{
        setFetchData(data);
      }
      

    } catch (err) {
      setError("Por favor revise la conexión a internet 🛸");
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <SearchBox handleSearch={handleSearch} />
      <WeatherContainer fetchData={fetchData} error={error} />
    </div>
  );
}

export default App;
