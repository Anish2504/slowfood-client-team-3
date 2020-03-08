<<<<<<< HEAD
describe("user views menus", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  describe("User attempts to view menu", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/",
        response: "fixture:menu_data.json"
      });
    });

    it("sucessfully", () => {
      cy.get("#index").within(() => {
        cy.contains("Gravad lax");
        cy.contains("Sill");
        cy.contains("Varmrökt lax");
      });
    });
  });

  describe("when the are NO products", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/products",
        response: []
      });
    });

    it("unsuccessfully", () => {
      cy.get("#index").should("not.exist");
    });
  });
});
=======
describe('user views menus', () => {

	beforeEach(() => {
		cy.visit("http://localhost:3001")
	});

	describe('when there are products', () => {
		before(() => {
			cy.server();
			cy.route({
				method: 'GET',
				url: 'http://localhost:3000/api/products',
				response: 'fixture:menu_data.json'
			})
		})

		it('successfully', () => {
			cy.get('#index').within(() => {
				cy.contains('Gravad lax')
				cy.contains('Sill')
				cy.contains('Varmrökt lax')
			})
		})
	});

	describe('when the are NO products', () => {

		before(() => {
			cy.server();
			cy.route({
				method: 'GET',
				url: 'http://localhost:3000/api/products',
				response: []
			})
		})

		it('unsuccessfully', () => {
			cy.get('#index').should('not.exist')
		})
	});
})
>>>>>>> f5c0bb9f1cb0fc3b3e5278fc97631c9d656e3adb
