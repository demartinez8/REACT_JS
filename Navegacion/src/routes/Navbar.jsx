import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <Link className="botonSuperior" to="/REACT_JS/Navegacion/inicio">INICIO</Link>
        <Link className="botonSuperior" to="/REACT_JS/Navegacion/html">HTML5</Link>
        <Link className="botonSuperior" to="/REACT_JS/Navegacion/js">JAVASCRIPT</Link>
        <Link className="botonSuperior" to="/REACT_JS/Navegacion/css">CSS3</Link>
        <Link className="botonSuperior" to="/REACT_JS/Navegacion/react">REACT JS</Link>
    </>
  )
}