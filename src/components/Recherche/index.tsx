import React from "react";
import { useSelector } from "react-redux";
import { Plante } from "../../models/plante.models";
import { selectPlantes } from "../../redux/plantes/selectors";

function Recherche(props: { filtrerPlantes: React.Dispatch<Array<Plante>> }) {
  const plantes: Plante[] = useSelector(selectPlantes);

  function filtrerNom(e: any) {
    let nomRecherche: string = e.target.value;

    let plantesFiltrees = plantes.filter((plante: any) => {
      return plante.nom.toLowerCase().startsWith(nomRecherche.toLowerCase());
    });

    props.filtrerPlantes(plantesFiltrees);
  }

  return (
    <div>
      <label htmlFor="nom">Chercher par nom : </label>
      <input type="text" name="Nom" id="nom" onChange={filtrerNom} />
    </div>
  );
}

export default Recherche;
