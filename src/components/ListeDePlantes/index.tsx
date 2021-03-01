import React from "react";
import { Link } from "react-router-dom";
import { Plante } from "../../models/plante.models";
import { fetchPlantes } from "../../redux/plantes/actions";
import './ListeDePlantes.scss';

function ListeDePlantes() {
  const [plantes, setPlantes] = React.useState<any>([]);

  React.useEffect(() => {
    fetchPlantes().then(res => {
      setPlantes(res);
    });
  }, []);

  return (
    <div>
      <h2>Liste des plantes</h2>
      <ul className="liste-de-plantes">{ plantes &&
        plantes.map((plante: Plante, i: number): any => (
          <li key={i}>
            <Link to={"/plante/" + plante.id}>
              <img src={plante.image} alt={plante.nom}></img>
              <h3>{ plante.nom }</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeDePlantes;
