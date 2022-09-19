
import marvel from "../../../src/marvel.png";
import dc from "../../../src/dc.png";
import { useNavigate } from "react-router-dom";

export const InicioPage = () => {
  
  const navigate = useNavigate();

  const onMarvel = () => {
    navigate("/marvel");
  }

  const onDc = () => {
    navigate("/dc");
  }

    return (
    <>
        <h1 className="text-center font-bold text-6xl uppercase mt-12 mb-12 animate__animated animate__zoomInDown">
            ¿ De qué <span className="text-yellow-500">Team</span> eres 👽 ?
        </h1>
        <div className="flex flex-col justify-center items-center">
            <img onClick={onMarvel} src={marvel} className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse" />
            <img onClick={onDc} src={dc}  className="rounded-lg cursor-pointer m-4 animate__animated animate__infinite animate__pulse" />
        </div>
    </>
  )
}
