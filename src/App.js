import { useEffect, useState } from "react";
import { ConsultaPeliculas } from "./components/ConsultaPeliculas";
import { CrearPelicula } from "./components/CrearPelicula";
import { ListadoPeliculas } from "./components/ListadoPeliculas";
import logo from "./logo.svg";
function App() {
  const [peliculasState, setPeliculasState] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("peliculas")) || [];
    setPeliculasState(items);
  }, []); // Se ejecuta solo al montar el componente

  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>React Peliculas</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section id="content" className="content">
        {/*aqui van las peliculas*/}
        {peliculasState.length > 0 ? (
          peliculasState.map((pelicula, index) => (
            <ListadoPeliculas key={index} pelicula={pelicula} />
          ))
        ) : (
          <p>No hay películas en el almacenamiento.</p>
        )}
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <ConsultaPeliculas />

        <CrearPelicula />
      </aside>

      {/*Pie de página*/}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
