import { fullMenu } from "./objetMenu.js";


function filterMenu(listMenu, tags) {
  var monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.categories.forEach((element) => {
        if (tags.includes(element)) {
          monTableau.push(plat);
        }
      });
    });
  });
  return monTableau;
}

const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");

bouton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

console.log(bouton.getAttribute("type"));

<
const main = document.querySelector("main");

fullMenu.forEach((elem) => {
  elem.forEach((object) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    object.categories.forEach((e) => {
      card.classList.add(e);
    });

    let picture = document.createElement("img");
    picture.classList.add("img");
    picture.src = object.picture;
    card.appendChild(picture);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let name = document.createElement("h2");
    name.classList.add("h2");
    name.textContent = object.name;
    cardBody.appendChild(name);

    let prix = document.createElement("span");
    prix.classList.add("item");

    prix.textContent = "Prix : " + object.prix +" €";

    cardBody.appendChild(prix);

    let categories = document.createElement("span");
    categories.classList.add("item");
    categories.textContent = "Catégories : " + object.categories;
    cardBody.appendChild(categories);

    let ingredients = document.createElement("span");
    ingredients.classList.add("item");
    ingredients.textContent = "ingrédients : " + object.ingredients;
    cardBody.appendChild(ingredients);

    let button = document.createElement("button");
    button.classList.add("btnPanier");
    cardBody.appendChild(button);

    main.appendChild(card);
  });
});
// ajout d'un bouton "ajout au panier sur les cards"
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  const addButton = card.querySelector(".btnPanier");

  addButton.addEventListener("click", function() {
  });

});

