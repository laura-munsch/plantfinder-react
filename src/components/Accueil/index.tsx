import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn, logOut } from "../../redux/connexion/action";
import { isLoggedIn } from "../../redux/connexion/selector";

const connexionButtonStyle: string = "ml-4 italic underline";

const ConnexionButton = () => {
  if (useSelector(isLoggedIn)) {
    return (
      <button onClick={logOut} className={connexionButtonStyle}>
        Déconnexion
      </button>
    );
  }

  return (
    <button onClick={logIn} className={connexionButtonStyle}>
      Connexion
    </button>
  );
};

function Accueil() {
  return (
    <div className="absolute inset-0">
      <div className="bg-yellow-100 w-2/6 absolute top-1/4 z-10 h-1/5 left-1/3 p-10">
        <p>Bienvenue sur l'encylopédie de plantes</p>
      </div>

      <div className="bg-gray-800 h-4/6 absolute bottom-0 w-full text-white pt-36">
        <p className="text-center">
          <Link to="/plante">
            <button className="bg-yellow-700 px-6 py-3">
              Trouver une plante
            </button>
          </Link>
        </p>
        <p className="w-full absolute bottom-10 text-center italic underline">
          {useSelector(isLoggedIn) && (
            <Link to="/ajout-plante" className="mr-4">
              Ajouter une plante
            </Link>
          )}
          <ConnexionButton />
        </p>
      </div>
    </div>
  );
}

export default Accueil;
