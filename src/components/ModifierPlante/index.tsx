import React from "react";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../../redux/connexion/selector";
import {
  updatePlante,
  fetchPlantes,
  fetchPlante,
} from "../../redux/plantes/actions";

function ModifierPlante(props: any) {
  const isConnected = useSelector(isLoggedIn);
  const id = props.match.params.id;
  const [nom, setNom] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  React.useEffect(() => {
    fetchPlante(id).then((res) => {
      setNom(res.nom);
      setImage(res.image);
      if (res.description) {
        setDescription(res.description);
      }
    });
  }, [id]);

  function modifierPlante(e: any) {
    e.preventDefault();

    const nom = document.getElementById("nom") as HTMLInputElement;
    const description = document.getElementById(
      "description"
    ) as HTMLInputElement;
    const image = document.getElementById("image") as HTMLInputElement;

    console.log("envoi du form");

    updatePlante(id, nom.value, description.value, image.value).then((res) => {
      fetchPlantes();
      props.history.push("/plante/" + id);
    });
  }

  if (nom && isConnected) {
    return (
      <div className="bg-yellow-100 px-10 pt-10 pb-16 md:absolute mt-8 md:h-3/4 lg:h-auto w-full bottom-0">
        <h2 className="text-4xl text-gray-800 mb-8">
          Modification de la plante
        </h2>

        <form onSubmit={modifierPlante} method="POST">
          <p className="mb-2">
            <label htmlFor="nom">Nom de la plante : </label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="h-6 text-green-700"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </p>
          <p className="mb-6">
            <label htmlFor="image">URL d'une image : </label>
            <input
              type="text"
              name="image"
              id="image"
              className="h-6 text-green-700"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </p>
          <input
            type="submit"
            value="Modifier"
            className="px-3 py-2 bg-green-700 text-white cursor-pointer"
          />
        </form>
      </div>
    );
  } else if (isConnected) {
    return <p>Attente du chargement de la plante...</p>;
  }

  return <p>Vous devez être connecté-e pour avoir accès à cette page</p>;
}

export default ModifierPlante;
