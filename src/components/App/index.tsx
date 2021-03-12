import React from "react";
import { Link, Route, Router } from "react-router-dom";
import ListeDePlantes from "../ListeDePlantes";
import "./App.scss";
import { createBrowserHistory } from "history";
import PlanteComposant from "../Plante";
import AjoutPlante from "../AjoutPlante";
import Accueil from "../Accueil";
import { fetchPlantes } from "../../redux/plantes/actions";

const history = createBrowserHistory();

function App() {
  const plantes = fetchPlantes();

  return (
    <div className="App">
      <Router history={history}>
        <h1>
          <Link to="/">Plantes</Link>
        </h1>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/plante">
          <ListeDePlantes plantes={plantes} />
        </Route>
        <Route exact path="/plante/:id" component={PlanteComposant} />
        <Route exact path="/ajout-plante" component={AjoutPlante} />
      </Router>
    </div>
  );
}

export default App;
