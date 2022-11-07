describe("My First Test", () => {
  it("TC1", () => {
    // cy.visit("https://www.longines.com/fr/");
    // cy.wait(5000);

    // cy.title().should(
    //   "eq",
    //   "Site Officiel de Longines® : Maison Horlogère Suisse depuis 1832 | Longines®"
    // );
    const dbName = "stagingA";
    const query = `CREATE TABLE genre(
          id INT NOT NULL , 
          chaine VARCHAR(255) NOT NULL , 
          nombre INT NOT NULL ) 
          `;

    // const query1 = `CREATE TABLE  genre(
    //   id INT NOT NULL ,
    //   chaine VARCHAR(255) NOT NULL ,
    //   nombre INT NOT NULL )
    //   ENGINE = InnoDB`;

    cy.task("queryDatabase", { dbName, query });
    // cy.task("queryDatabase", { dbName, query1 });
    const query2 = `INSERT INTO genre (id, chaine,nombre) VALUES (NULL, 'troy',25)`;

    for (let i = 1; i < 5; i++) {
      let j = i;
      cy.task("queryDatabase", { dbName, query2 });
    }

    // cy.task("queryDatabase", `SELECT id FROM genre WHERE name='troy'`).then(
    //   (count) => {
    //     expect(count).to.have.lengthOf(5);
    //   }
    // );
  });
});
