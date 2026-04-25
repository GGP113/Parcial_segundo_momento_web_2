import React from 'react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/galeriaStyle.css";
import "../styles/paginaPrincipal.css";


function Reservas() {
  return (
    <div className="page-container">
      <NavBar />

      <main className="main-content-gallery">
        <div className="text-secction">
          <h1>Reserva un Taller</h1>
          <p>
            Déjanos tus datos y nos pondremos en contacto para agendar tu primera sesión.
          </p>
        </div>

        <div className="">
          
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Reservas