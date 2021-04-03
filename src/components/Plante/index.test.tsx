import React from "react";
import renderer from "react-test-renderer";
import Plante from "./index";

// on regarde si une plante (avec l'ID 1) peut bien être affichée, si oui le test est réussi
test("Afficher une plante", () => {
  const component = renderer.create(
    <Plante match={{ params: { id: 1 }, isExact: true, path: "", url: "" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
