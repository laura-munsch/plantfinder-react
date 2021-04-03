import React from "react";
import { useSelector } from "react-redux";
import { Plante } from "../../models/plante.models";
import { selectPlantes } from "../../redux/plantes/selectors";

const Recherche = (props: {
  filtrerPlantes: React.Dispatch<Array<Plante>>;
}) => {
  // on utilise les plantes du state global pour les filtrer
  const plantes: Plante[] = useSelector(selectPlantes);

  // fonction appelée à la modification du champs de recherche
  function filtrerNom(e: any) {
    let nomRecherche: string = e.target.value;

    // on stocke dans le tableau avec les plantes filtrées les plantes dont le nom commence par ce qui a été tapé dans la barre de recherche
    let plantesFiltrees = plantes.filter((plante: any) => {
      return plante.nom.toLowerCase().startsWith(nomRecherche.toLowerCase());
    });

    // on mettre à jour le tableau avec les plantes filtrées
    props.filtrerPlantes(plantesFiltrees);
  }

  return (
    <div>
      <label htmlFor="nom">Chercher par nom : </label>
      <input type="text" name="Nom" id="nom" onChange={filtrerNom} />
    </div>
  );
};

export default Recherche;
