import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/paginaPrincipal.css';

function PaginaPrincipal() {
  return (
    <div className="page-container">
      <NavBar />

      <main className="main-content">
        <h1>El arte de la paciencia</h1>
        <p>Descubre la serenidad a través del cuidado y diseño de árboles Bonsái. Un espacio para reconectar con la naturaleza.</p>
        <button>Reserva un taller</button>
      </main>

      <Footer />
    </div>
  );
}

export default PaginaPrincipal;
