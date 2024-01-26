// заходит на сайт //
describe("my first test", () => {
  it("Visits saucedemo site", () => {
    cy.visit("https://www.youtube.com/");
  });
  /* Вводит текст в search bar и нажимает кнопку search */
  it("search bar test", () => {
    cy.visit("https://www.youtube.com/");

    cy.get("input[id=search]").type("amongus");
    cy.get("button[id=search-icon-legacy]").click();
  });
  /* Нажимает на кнопку shorts */
  it("shorts test", () => {
    cy.visit("https://www.youtube.com/");

    cy.get("a[title=Shorts]").click();
  });
  /* Нажимает на кнопку в верхнем массиве */
  it("down bar test", () => {
    cy.visit("https://www.youtube.com/");

    cy.get("yt-formatted-string[title=Видеоигры]").click();
  });
  /* Нажимает на три точку с натсройками */
  it("settings test", () => {
    cy.visit("https://www.youtube.com/");

    cy.get("ytd-topbar-menu-button-renderer").click();
  });
  /* Нажимает кнопку guide рядом с лого */
  it("guide button test", () => {
    cy.visit("https://www.youtube.com/");

    cy.get("button[aria-label=Гид]").click();
  });
});
