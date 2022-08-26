import React from "react";
import { useSelector } from "react-redux";
import { Categorie } from "../../models/categorie.model";
import { selectCategories } from "../../redux/categories/selector";
import { addPlante, fetchPlantes } from "../../redux/plantes/actions";

const AjoutPlante = (props: any) => {
  // on utilise les catégories du state global
  const categories: Categorie[] = useSelector(selectCategories);

  // fonction appelée à l'envoi du formulaire :
  function ajouterPlante(e: any) {
    e.preventDefault();

    const nom = document.getElementById("nom") as HTMLInputElement;
    const description = document.getElementById(
      "description"
    ) as HTMLInputElement;
    const image = document.getElementById("image") as HTMLInputElement;
    const cat = document.getElementById("categorie") as HTMLSelectElement;
    const categorie = cat.value === "0" ? undefined : Number(cat.value);

    // on crée la plante, puis récupère à nouveau la liste des plantes pour que celle-ci s'affiche
    addPlante(nom.value, description.value, image.value, categorie).then(
      (res) => {
        fetchPlantes();
        // on redirige l'utilisateur-rice vers la plante crée
        props.history.push("plante/" + res.data.id);
      }
    );
  }

  return (
    <div className="bg-yellow-100 px-10 pt-10 pb-16 md:absolute mt-8 md:h-3/4 lg:h-auto w-full bottom-0">
      <h2 className="text-4xl text-gray-800 mb-8">Ajout d'une plante</h2>

      <form onSubmit={ajouterPlante} method="POST">
        <p className="mb-2">
          <label htmlFor="nom">Nom de la plante : </label>
          <input
            type="text"
            name="nom"
            id="nom"
            className="h-6 text-green-700"
          />
        </p>
        <p className="mb-2">
          <label htmlFor="image">URL d'une image : </label>
          <input
            type="text"
            name="image"
            id="image"
            className="h-6 text-green-700"
          />
        </p>
        <p className="mb-6">
          <label htmlFor="categorie">Catégorie : </label>
          <select
            name="categorie"
            id="categorie"
            className="h-6 text-green-700"
          >
            <option value="0" key={1}>
              Aucune
            </option>
            {categories &&
              categories.map((cat, i) => (
                <option value={cat.id} key={i + 1}>
                  {cat.nom}
                </option>
              ))}
          </select>
        </p>
        <p className="mb-2">
          <label htmlFor="description">
            Description de la plante &ensp;
            <i>(son milieu de vie, comment s'en occuper, etc.)</i> :
          </label>
        </p>
        <p className="mb-8 text-green-700">
          <textarea
            name="description"
            id="description"
            cols={50}
            rows={10}
          ></textarea>
        </p>
        <input
          type="submit"
          value="Ajouter la plante"
          className="px-3 py-2 bg-green-700 text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AjoutPlante;
