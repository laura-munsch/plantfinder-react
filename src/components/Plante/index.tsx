import React from "react";
import { Link } from "react-router-dom";
import { Caracteristique } from "../../models/caracteristique.models";
import { Categorie } from "../../models/categorie.model";
import { Plante } from "../../models/plante.models";
import {
  fetchPlante,
  fetchPlantes,
  removePlante,
} from "../../redux/plantes/actions";
import { numAverage } from "../../services/utilities.service";

function InfoPlante(props: any) {
  let id = props.match.params.id;

  const [plante, setPlante] = React.useState<Plante | null>(null);

  React.useEffect(() => {
    fetchPlante(id).then((res) => {
      setPlante(res);
    });
  }, [id]);

  if (plante !== null) {
    const supprimerPlante = () => {
      removePlante(plante.id).then(() => {
        fetchPlantes();
        props.history.push("/plante");
      });
    };

    let eau: Array<number> = [];
    let lumiere: Array<number> = [];
    let difficulte: Array<number> = [];

    plante.caracteristiques &&
      plante.caracteristiques.forEach(
        (caracteristique: Caracteristique, i: number) => {
          switch (caracteristique.nom) {
            case "eau":
              eau.push(parseInt(caracteristique.valeur));
              break;
            case "lumière":
              lumiere.push(parseInt(caracteristique.valeur));
              break;
            case "difficulté":
              difficulte.push(parseInt(caracteristique.valeur));
              break;
          }
        }
      );

    return (
      <div className="bg-gray-800 text-white mt-10 py-10 flex justify-evenly absolute bottom-0 h-4/5 w-full">
        <div className="bg-green-700 pt-5 w-2/5 h-5/6">
          <h2 className="text-white text-5xl mx-5 mb-5">{plante.nom}</h2>

          {(eau.length !== 0 ||
            lumiere.length !== 0 ||
            difficulte.length !== 0) && (
            <ul className="flex ml-5 mb-4">
              {eau.length !== 0 && (
                <li key={1} className="mr-8">
                  Eau : <strong>{numAverage(eau)}</strong>
                </li>
              )}
              {lumiere.length !== 0 && (
                <li key={2} className="mr-8">
                  Lumière : <strong>{numAverage(lumiere)}</strong>
                </li>
              )}
              {difficulte.length !== 0 && (
                <li key={3} className="mr-8">
                  Difficulté : <strong>{numAverage(difficulte)}</strong>
                </li>
              )}
            </ul>
          )}

          <img
            src={plante.image}
            alt={plante.nom}
            className="height-2/4 h-full w-full object-cover object-center"
          />
        </div>

        <div className="w-2/5 relative">
          {plante.categories && (
            <ul className="flex text-yellow-100 italic underline mb-10">
              {plante.categories.map((categorie: Categorie, i: number) => (
                <li key={i} className="mr-8">
                  {categorie.nom}
                </li>
              ))}
            </ul>
          )}

          <p className="mb-2">
            Créé le {new Date(plante.created_at).toLocaleDateString()}
          </p>

          <p>{plante.description}</p>

          <p className="absolute bottom-0 underline italic">
            <Link to={"/plante"}>Retour à la liste</Link>
            <button onClick={supprimerPlante} className="underline italic ml-8">
              Supprimer la plante
            </button>
          </p>
        </div>
      </div>
    );
  } else {
    return <p>En attente du chargement de la plante...</p>;
  }
}

export default InfoPlante;
