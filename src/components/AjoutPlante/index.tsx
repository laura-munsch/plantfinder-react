import React from "react";
import { apiService } from "../../services/api.service";
import "./AjoutPlante.scss";

function AjoutPlante(props: any) {
  function ajouterPlante(e: any) {
    e.preventDefault();

    const nom = document.getElementById("nom") as HTMLInputElement;
    const description = document.getElementById(
      "description"
    ) as HTMLInputElement;
    const image = document.getElementById("image") as HTMLInputElement;

    apiService
      .addPlante(nom.value, description.value, image.value)
      .then((res) => {
        props.history.push("plante/" + res.data.id);
      });
  }

  return (
    <div>
      <h2>Ajout d'une plante</h2>

      <form onSubmit={ajouterPlante} method="POST">
        <p>
          <label htmlFor="nom">Nom de la plante : </label>
          <input type="text" name="nom" id="nom" />
        </p>
        <p>
          <label htmlFor="image">URL d'une image : </label>
          <input type="text" name="image" id="image" />
        </p>
        <p>
          <label htmlFor="description">
            Description de la plante (son milieu de vie, comment s'en occuper,
            etc.) :
          </label>
          <br />
          <textarea
            name="description"
            id="description"
            cols={50}
            rows={10}
          ></textarea>
        </p>
        <input type="submit" value="Ajouter la plante" />
      </form>
    </div>
  );
}

export default AjoutPlante;
