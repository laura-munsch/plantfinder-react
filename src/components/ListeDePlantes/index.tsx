import React from "react";
import { fetchPlantes } from "../../redux/plantes/actions";
import './App.scss';

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
        plantes.map((plante: any, i: number): any => (
          <li key={i}>
            <img src={plante.image} alt={plante.nom}></img>
            <h3>{ plante.nom }</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeDePlantes;
