describe("service is available", function () {
  it("should be available on localhost:3000", function () {
    cy.visit("http://localhost:3000");
  });

  it("should content 'Соберите бургер'", function () {
    cy.contains("Соберите бургер");
  });

  const dragAndDrop = (index) => {
    cy.get('[data-cy="ingredient-elem"]').eq(index).trigger("dragstart");
    cy.get('[data-cy="other-container"]').trigger("drop");
  };

  it("should work correctly drag and drop", function () {
    dragAndDrop(0);
    cy.get('[data-cy="up-bun"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
    cy.get('[data-cy="down-bun"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
    dragAndDrop(1);
    cy.get('[data-cy="up-bun"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
    cy.get('[data-cy="down-bun"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(1);
      });
    dragAndDrop(2);
    dragAndDrop(3);
    dragAndDrop(4);
    cy.get('[data-cy="other-container"]')
      .children()
      .should(($children) => {
        expect($children).to.have.length(3);
      });
  });

  it("should open order page after continue button click", function () {
    cy.get("button").contains("Оформить заказ").click();
  });
});
