import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import heroApi from "../../api/HeroesApi";

export const HeroPage = () => {

  const navigate = useNavigate();

  const onNavigationBack = () => {
    navigate(-1);
  }
  
  const [getHeroes, setGetHeroes] = useState([]);

  const { heroId } = useParams();

  useEffect(() => {
    obtenerHeroes();
  }, []);

  const obtenerHeroes = async () => {
    try {
      const respuesta = await heroApi.get(`/superheroes/${heroId}`);
      setGetHeroes(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8 animate__animated animate__fadeInLeft"
        key={getHeroes.id}
      >
        <img className="w-full h-full rounded-l-2xl" src={getHeroes.imagen} />

        <div className="px-6 py-4">
            <div className="text-xl mb-2">
                <span className="font-bold text-yellow-500">Nombre : </span> {getHeroes.nombre}
            </div>
            <div className="text-xl mb-2">
                <span className="font-bold text-yellow-500">Editorial : </span> {getHeroes.editorial}
            </div>
            <div className="text-xl mb-2">
                <span className="font-bold text-yellow-500">Estreno : </span> {getHeroes.estreno}
            </div>
            <span className="text-xl font-bold text-yellow-500">
                Descripción : 
            </span>
            <p className="text-gray-400 text-base text-justify mt-4 mb-4">
                {getHeroes.descripcion}
            </p>
            <span className="text-xl font-bold text-yellow-500">Poderes : </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 ml-4">{getHeroes.poderes}</span>
            <button onClick={onNavigationBack} className="w-full bg-blue-800 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-blue-600">👈 Volver</button>
        </div>
      </div>
    </>
  );
};
