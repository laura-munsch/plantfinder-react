import React from "react";
import renderer from "react-test-renderer";
import Plante from "./index";

test("Afficher une plante", () => {
  const component = renderer.create(
    <Plante match={{ params: { id: 1 }, isExact: true, path: "", url: "" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
