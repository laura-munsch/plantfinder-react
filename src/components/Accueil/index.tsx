import React from "react";
import { Link } from "react-router-dom";
import "./Accueil.scss";

function Accueil() {
  return (
    <div>
      <p>Bienvenue sur l'encylopédie de plantes</p>

      <Link to="/plante">Trouver une plante</Link>
      <Link to="/ajout-plante">Ajouter une plante</Link>
    </div>
  );
}

export default Accueil;
