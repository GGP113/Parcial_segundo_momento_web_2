import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/galeriaStyle.css";
import "../styles/paginaPrincipal.css";

function Galeria() {
  return (
    <div className="page-container">
      <NavBar />

      <main className="main-content-gallery">
        <div className="text-secction">
          <h1>Nuestra Colección</h1>
          <p>
            Un vistazo a algunos de los ejemplares en los que hemos trabajado.
            Cada árbol cuenta una historia de tiempo y paciencia.
          </p>
        </div>

        <div className="items-galeria">
          <div>Arce Japonés</div>
          <div>Pino Negro</div>
          <div>Ficus Retusa</div>
          <div>Olmo Chino</div>
          <div>Enebro</div>
          <div>Azalea</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Galeria;
