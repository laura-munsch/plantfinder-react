import React from "react";
import { Link } from "react-router-dom";
import { Caracteristique } from "../../models/caracteristique.models";
import { Categorie } from "../../models/categorie.model";
import { Plante } from "../../models/plante.models";
import { fetchPlante, removePlante } from "../../redux/plantes/actions";
import { numAverage } from "../../services/utilities.service";
import "./Plante.scss";

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
      <div className="infos-plante">
        <Link to={"/plante"}>Retour à la liste</Link>
        <h2>{plante.nom}</h2>
        <img src={plante.image} alt={plante.nom} />

        <p>Crée le {new Date(plante.created_at).toLocaleDateString()}</p>

        <p>{plante.description}</p>

        {(eau.length !== 0 ||
          lumiere.length !== 0 ||
          difficulte.length !== 0) && (
          <div>
            <h3>Caractéristiques de la plante :</h3>
            <ul>
              {eau.length !== 0 && <li key={1}>Eau : {numAverage(eau)}</li>}
              {lumiere.length !== 0 && (
                <li key={2}>Lumière : {numAverage(lumiere)} </li>
              )}
              {difficulte.length !== 0 && (
                <li key={3}>Difficulté : {numAverage(difficulte)}</li>
              )}
            </ul>
          </div>
        )}

        {plante.categories && (
          <div>
            <h3>Catégories :</h3>
            <ul>
              {plante.categories.map((categorie: Categorie, i: number) => (
                <li key={i}>{categorie.nom}</li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={supprimerPlante}>Supprimer la plante</button>
      </div>
    );
  } else {
    return <p>En attente du chargement de la plante...</p>;
  }
}

export default InfoPlante;
