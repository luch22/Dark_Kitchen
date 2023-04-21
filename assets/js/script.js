import { fullMenu } from "./objetMenu.js";

//#region Function
function filterMenu(listMenu, tags) {
  let monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.categorie.forEach((element) => {
        if (tags == element) {
          monTableau.push(plat);
        }
      });
    });
  });
  return monTableau;
}

function sortMenu(listMenu) {
  let monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      monTableau.push(plat);
    });
  });
  console.log(monTableau.length);
  monTableau.sort(function (a, b) {
    return a.prix - b.prix;
  });
  return monTableau;
}

function affichageHtml(listMenu) {
  listMenu.forEach((menu) => {
    let catmenu = menu[0].categorie[0];
    let sectionParent = document.createElement("section");
    sectionParent.setAttribute("class", catmenu);

    sectionParent.innerHTML = `<img src="">${catmenu}  `;

   // sectionParent.innerHTML = `<h3>${catmenu}</h3>  `; à modifier (logo section)

    menu.forEach((plat) => {
      sectionParent.append(listerPlat(plat));
      main.append(sectionParent);
    });
  });
}

function listerPlat(plat) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  plat.categorie.forEach((e) => {
    card.classList.add(e);
  });

  let picture = document.createElement("img");
  picture.classList.add("img");
  picture.src = plat.picture;
  card.appendChild(picture);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  let name = document.createElement("h2");
  name.classList.add("h2");
  name.textContent = plat.name;
  cardBody.appendChild(name);

  let prix = document.createElement("span");

  // prix.innerHTML = `<span class="prixArticle ">Prix</span> :  ${plat.prix} €`;
  prix.classList.add("item");
  prix.textContent = "Prix : " + plat.prix + " €";
  cardBody.appendChild(prix);

  let categorie = document.createElement("span");
  categorie.classList.add("item");
  categorie.textContent = "Catégories : " + plat.categorie;
  cardBody.appendChild(categorie);

  let ingredients = document.createElement("span");
  ingredients.classList.add("item");
  ingredients.textContent = "ingrédients : " + plat.ingredients;
  cardBody.appendChild(ingredients);
  return card;
}
function cleanHTML() {
  main.querySelectorAll("section").forEach((element) => {
    element.remove();
  });
}

const listTri = document.querySelector(".listTri");
for (const iterator of listTri.children) {
  console.log(iterator);
  iterator.setAttribute("class", iterator.innerHTML.valueOf());
}
listTri.addEventListener("click", (e) => {
  switch (e.target.classList[0]) {
    case "menu":
      cleanHTML();
      affichageHtml(fullMenu);
      break;
    case "sushi":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "maki":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "rolls":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "sashimi":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "onigiri":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "ramen":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "boisson":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;
    case "dessert":
      console.log(e.target.classList[0]);
      cleanHTML();
      affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
      break;

    default:
      break;
  }
});

//#endregion

const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");
const main = document.querySelector("main");

bouton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

affichageHtml(fullMenu);

// affichageHtml([sortMenu(fullMenu)]);
// affichageHtml([filterMenu(fullMenu, ["poisson", ""])]);



//listerPlat(sortMenu(fullMenu));
// ajout d'un bouton "ajout au panier sur les cards"
const cards = document.getElementsByClassName("card");
// //cards.forEach(function(card) {
//   const addButton = card.querySelector(".btnPanier");
//   addButton.addEventListener("click", function() {
//   });
// });

let cart = document.createElement("aside");
cart.classList.add("cart");
body.appendChild(cart);

/*let i = 0;
function affichagePanier(listPanier) {
  listPanier.forEach((menu), () => {
    let nomPanier = menu[i].name[0];
    let prixPanier = menu[i].prix[0];
    let imagePanier = menu[i].picture[0]
    let divCart = document.createElement("div");
    divCart.setAttribute("class", menuPanier);
    divCart.innerHTML = `<img src='${imagePanier}'> `;
      cart.appendChild(divCart);
      i+=1;
  });
};
affichagePanier(listPanier);
*/
function createPanier(card){
  let itemPanier = document.createElement("div");
  let namePanier = card.querySelector('h2');
  let prixPanier = card.children[3];
  itemPanier.innerHTML = `<span>${namePanier.textContent}</span>`;
  cart.appendChild(itemPanier);
}


let card = document.getElementsByClassName("card");
let card1 = document.querySelectorAll(".card-body")


// card1.forEach(element => {
//   console.log(element);
  
// });
for (let i = 0; i < card.length; i++) {
   card[i].addEventListener('click', function() {
     createPanier(card[i]);
   });
 };