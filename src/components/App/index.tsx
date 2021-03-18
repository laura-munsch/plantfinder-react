import React from "react";
import { Link, Route, Router } from "react-router-dom";
import ListeDePlantes from "../ListeDePlantes";
import { createBrowserHistory } from "history";
import PlanteComposant from "../Plante";
import AjoutPlante from "../AjoutPlante";
import Accueil from "../Accueil";
import { fetchPlantes } from "../../redux/plantes/actions";
import { fecthCategories } from "../../redux/categories/actions";

const history = createBrowserHistory();

function App() {
  const plantes = fetchPlantes();
  const categories = fecthCategories();

  return (
    <div className="App">
      <Router history={history}>
        <h1 className="text-center mt-24 text-5xl">
          <Link to="/">Plantfinder</Link>
        </h1>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/plante">
          <ListeDePlantes plantes={plantes} />
        </Route>
        <Route exact path="/plante/:id" component={PlanteComposant} />
        <Route exact path="/ajout-plante">
          <AjoutPlante categories={categories} history={history} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
