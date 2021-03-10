import React from "react";
import { Route, Router } from "react-router-dom";
import ListeDePlantes from "../ListeDePlantes";
import "./App.scss";
import { createBrowserHistory } from "history";
import Plante from "../Plante";
import AjoutPlante from "../AjoutPlante";
import Accueil from "../Accueil";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <h1>Plantes</h1>
      <Router history={history}>
        <Route exact path="/" component={Accueil} />
        <Route exact path="/plante" component={ListeDePlantes} />
        <Route exact path="/plante/:id" component={Plante} />
        <Route exact path="/ajout-plante" component={AjoutPlante} />
      </Router>
    </div>
  );
}

export default App;
