import { useState } from "react";
import { ConsultaPeliculas } from "./components/ConsultaPeliculas";
import { CrearPelicula } from "./components/CrearPelicula";
import { ListadoPeliculas } from "./components/ListadoPeliculas";
import { NavBar } from "./components/NavBar";
import logo from "./logo.svg";
function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>React Peliculas</h1>
      </header>

      {/*Barra de navegación*/}
      <NavBar />

      {/*Contenido principal*/}
      <section id="content" className="content">
        {/*aqui van las peliculas*/}
        <ListadoPeliculas
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <ConsultaPeliculas />

        <CrearPelicula setListadoState={setListadoState} />
      </aside>

      {/*Pie de página*/}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
