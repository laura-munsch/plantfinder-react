import React from "react";
import { Route, Router } from "react-router-dom";
import ListeDePlantes from "../ListeDePlantes";
import "./App.scss";
import { createBrowserHistory } from "history";
import Plante from "../Plante";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <h1>Plantes</h1>
      <Router history={history}>
        <Route exact path="/" component={ListeDePlantes} />
        <Route exact path="/plante/:id" component={Plante} />
      </Router>
    </div>
  );
}

export default App;
