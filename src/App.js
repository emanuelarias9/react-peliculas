import { ConsultaPeliculas } from "./components/ConsultaPeliculas";
import { CrearPelicula } from "./components/CrearPelicula";
import { ListadoPeliculas } from "./components/ListadoPeliculas";
import logo from "./logo.svg";
function App() {
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
        {Array.from({ length: 4 }, (_, index) => (
          <ListadoPeliculas key={index} />
        ))}
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
