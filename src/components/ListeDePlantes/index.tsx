import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Plante } from "../../models/plante.models";
import { selectPlantes } from "../../redux/plantes/selectors";
import Recherche from "../Recherche";

function ListeDePlantes() {
  // on accède aux plantes du state global
  let plantes: Plante[] = useSelector(selectPlantes);

  // on crée un nouveau tableau où seront stockées les plantes filtrées
  const [
    plantesFiltrees,
    setPlantesFiltrees,
  ] = React.useState<Array<Plante> | null>(null);
  React.useEffect(() => {
    setPlantesFiltrees(plantes);
  }, [plantes]);

  // on affiche le composant seulement s'il y a des plantes
  if (plantes) {
    return (
      <div className="bg-yellow-100 p-10 mt-10">
        <div className="mb-5 sm:pl-1 lg:pl-3">
          <Recherche filtrerPlantes={setPlantesFiltrees} />
        </div>

        <ul className="liste-de-plantes flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-3 xl:-mx-3 w-full sm:pl-1 lg:pl-3">
          {plantesFiltrees &&
            plantesFiltrees.map((plante: Plante, i: number): any => (
              <li
                key={i}
                className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/3"
              >
                <div className="relative">
                  <Link to={"/plante/" + plante.id}>
                    <img
                      src={plante.image}
                      alt={plante.nom}
                      className="w-full h-80 object-cover object-center"
                    ></img>
                    <div className="absolute bottom-0 bg-gray-800 w-full text-white px-4 py-2">
                      <h2 className="text-xl">{plante.nom}</h2>
                    </div>
                  </Link>
                </div>
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
