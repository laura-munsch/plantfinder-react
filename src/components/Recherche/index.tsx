import React from "react";
import { Plante } from "../../models/plante.models";
import store from "../../redux/store";
import "./Recherche.scss";

function Recherche(props: { filtrerPlantes: React.Dispatch<Array<Plante>> }) {
  const plantes = store.getState().plantes.toutesLesPlantes;

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
