import React from "react";
import { Link, Route, Router } from "react-router-dom";
import ListeDePlantes from "../ListeDePlantes";
import { createBrowserHistory } from "history";
import PlanteComposant from "../Plante";
import AjoutPlante from "../AjoutPlante";
import Accueil from "../Accueil";
import { fetchPlantes } from "../../redux/plantes/actions";
import { fecthCategories } from "../../redux/categories/actions";
import ModifierPlante from "../ModifierPlante";

const history = createBrowserHistory();

function App(props: any) {
  fetchPlantes();
  fecthCategories();

  return (
    <div className="App">
      <Router history={history}>
        <h1 className="text-center md:mt-24 mt-12 text-5xl">
          <Link to="/">Plantfinder</Link>
        </h1>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/plante">
          <ListeDePlantes />
        </Route>
        <Route exact path="/plante/:id" component={PlanteComposant} />
        <Route exact path="/plante/:id/modifier" component={ModifierPlante} />
        <Route exact path="/ajout-plante">
          <AjoutPlante history={history} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
