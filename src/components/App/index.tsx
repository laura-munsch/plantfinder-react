import React from "react";
import { Link, Route, Router } from "react-router-dom";
import ListeDePlantes from "../ListeDePlantes";
import "./App.scss";
import { createBrowserHistory } from "history";
import Plante from "../Plante";
import AjoutPlante from "../AjoutPlante";
import Accueil from "../Accueil";
import { fetchPlantes } from "../../redux/plantes/actions";
import { plantesSelector } from "../../redux/plantes/selector";

const history = createBrowserHistory();

function App() {
  fetchPlantes();

  return (
    <div className="App">
      <Router history={history}>
        <h1>
          <Link to="/">Plantes</Link>
        </h1>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/plante">
          <ListeDePlantes plantes={plantesSelector} />
        </Route>
        <Route exact path="/plante/:id" component={Plante} />
        <Route exact path="/ajout-plante" component={AjoutPlante} />
      </Router>
    </div>
  );
}

export default App;
