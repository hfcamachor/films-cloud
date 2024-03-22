import React from "react";
import { TestComponent } from "./TestComponent";

describe("<TestComponent />", () => {
  it("renders", () => {
    cy.mount(<TestComponent numberOne={20} numberTwo={50} />);

    // Find the element with the class `test-compo`
    cy.get(".test-compo");

    // Assert that the element contains the expected value
    cy.contains("70");
  });
});
