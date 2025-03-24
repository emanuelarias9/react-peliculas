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
        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description"></p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description"></p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description"></p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>

        <article className="peli-item">
          <h3 className="title">Desarrollo web</h3>
          <p className="description"></p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <input type="text" id="search_field" />
            <button id="search">Buscar</button>
          </form>
        </div>

        <div className="add">
          <h3 className="title">Añadir pelicula</h3>
          <form>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
          </form>
        </div>
      </aside>

      {/*Pie de página*/}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
