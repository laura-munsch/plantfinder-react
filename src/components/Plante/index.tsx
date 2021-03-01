import React from "react";
import { Link } from "react-router-dom";
import { fetchPlante } from "../../redux/plantes/actions";
import './Plante.scss';

function Plante(props: any) {
  let id = props.match.params.id;

  const [plante, setPlante] = React.useState<any>([]);

  React.useEffect(() => {
    fetchPlante(id).then(res => {
      setPlante(res);
    });
  }, [id]);

  return (
    <div className="infos-plante">
      <Link to={"/"}>Retour à la liste</Link>
      <h1>{ plante.nom }</h1>
      <img src={ plante.image } alt={ plante.nom } />
    </div>
  )
}

export default Plante;
