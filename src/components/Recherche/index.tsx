import React from "react";
import { Plante } from "../../models/plante.models";
import "./Recherche.scss";

function Recherche(props: {
  plantes: Array<Plante>;
  filtrerPlantes: React.Dispatch<Array<Plante>>;
}) {
  function filtrerNom(e: any) {
    let nomRecherche: string = e.target.value;

    let plantesFiltrees = props.plantes.filter((plante) => {
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
