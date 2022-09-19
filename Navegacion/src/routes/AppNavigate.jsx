import { Routes, Route } from "react-router-dom";
import { Footer } from "../Footer";

import { InicioPage, CssPage, HtmlPage, JsPage, ReactPage } from "../landing";
import { Navbar } from "./Navbar";

export const AppNavigate = () => {
  return (

    <div className="App">
      <Navbar />
      <h1 className="text-4xl font-semibold">🛸 Navegación con React Router 🛸</h1>
      <Routes>
      <Route path="/*" element={<InicioPage />} />
        <Route path="/REACT_JS/Navegacion/*" element={<InicioPage />} />

        <Route path="/REACT_JS/Navegacion/inicio" element={<InicioPage />} />
        <Route path="/REACT_JS/Navegacion/html" element={<HtmlPage />} />
        <Route path="/REACT_JS/Navegacion/css" element={<CssPage />} />
        <Route path="/REACT_JS/Navegacion/js" element={<JsPage />} />
        <Route path="/REACT_JS/Navegacion/react" element={<ReactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}