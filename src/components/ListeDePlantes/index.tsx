import React from "react";
import { Link } from "react-router-dom";
import { Plante } from "../../models/plante.models";
import store from "../../redux/store";
import Recherche from "../Recherche";
import "./ListeDePlantes.scss";

function ListeDePlantes(props: any) {
  let plantes: Plante[] = store.getState().plantes.toutesLesPlantes;

  const [
    plantesFiltrees,
    setPlantesFiltrees,
  ] = React.useState<Array<Plante> | null>(null);

  React.useEffect(() => {
    setPlantesFiltrees(plantes);
  }, [plantes]);

  if (plantes) {
    return (
      <div>
        <Recherche filtrerPlantes={setPlantesFiltrees} />

        <h2>Liste des plantes</h2>
        <ul className="liste-de-plantes">
          {plantesFiltrees &&
            plantesFiltrees.map((plante: Plante, i: number): any => (
              <li key={i}>
                <Link to={"/plante/" + plante.id}>
                  <img src={plante.image} alt={plante.nom}></img>
                  <h3>{plante.nom}</h3>
                </Link>
              </li>
            ))}
        </ul>

        {Array.isArray(plantesFiltrees) && plantesFiltrees.length === 0 && (
          <p>Aucune plante n'a été trouvée</p>
        )}
      </div>
    );
  }

  return <p>En attente du chargement des plantes...</p>;
}

export default ListeDePlantes;
