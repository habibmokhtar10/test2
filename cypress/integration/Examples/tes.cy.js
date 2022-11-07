describe("My First Test", () => {
  it("TC1", () => {
    // cy.visit("https://www.longines.com/fr/");
    // cy.wait(5000);

    // cy.title().should(
    //   "eq",
    //   "Site Officiel de Longines® : Maison Horlogère Suisse depuis 1832 | Longines®"
    // );
    cy.task("queryDb", `DROP TABLE IF EXISTS genre`);
    cy.task(
      "queryDb",
      `CREATE TABLE  genre(
        id SERIAL NOT NULL , 
        chaine VARCHAR(255) NOT NULL , 
        nombre INT NOT NULL ) 
        ENGINE = InnoDB`
    );
    for (let i = 1; i < 5; i++) {
      let j = i;
      cy.task(
        "queryDb",
        `INSERT INTO genre (id, chaine,nombre) VALUES (NULL, 'troy',25);`
      );
      // assert.isOk("add row", "row is added");
    }

    // cy.task("queryDb", `SELECT id FROM genre WHERE name='troy'`).then(
    //   (count) => {
    //     expect(count).to.have.lengthOf(5);
    //   }
    // );
  });
});
