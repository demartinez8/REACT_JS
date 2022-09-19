import inicioLogo from '../../assets/inicio.png';

export const InicioPage = () => {
  return (
    <div className="App">
        <div>
            <img src={inicioLogo} className="logo" />
        </div>
        <h2>Mi Página de Inicio</h2>
    </div>
  )
}