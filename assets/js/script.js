import { fullMenu } from "./objetMenu.js";

//#region Function
function filterMenu(listMenu, tags) {
  let monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.categorie.forEach((element) => {
        if (tags.includes(element)) {
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


    sectionParent.innerHTML = `<div class ="${catmenu}" ></div><h3>${catmenu}</h3>  `;

    menu.forEach((plat) => {
      sectionParent.append(listerPlat(plat));
      main.append(sectionParent);
    });
  });
  ajoutPanier();
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

  let button = document.createElement("button");
  cardBody.appendChild(button);
  button.classList.add("btnPanier");
  button.textContent = "test";

  // prix.innerHTML = `<span class="prixArticle ">Prix</span> :  ${plat.prix} €`;
  prix.classList.add("item");
  prix.textContent = "Prix : " + plat.prix + " €";
  cardBody.appendChild(prix);

  let categorie = document.createElement("span");
  categorie.classList.add("item");
  categorie.textContent = "Catégories : " + plat.categorie;
  cardBody.appendChild(categorie);
  if (plat.ingredients != null) {
    let ingredients = document.createElement("span");
    ingredients.classList.add("item");
    ingredients.textContent = "ingrédients : " + plat.ingredients;
    cardBody.appendChild(ingredients);
  }

  return card;
}
function displayedcart() {
  console.log(cartItems);

  let divcart = document.createElement("div");
  divcart.setAttribute("class", "container_cart");
  aside.style.display = "block";
  cartItems.forEach((plat) => {
    let divplat = document.createElement("div");
    let spanName = document.createElement("span");
    let spanPrix = document.createElement("span");
    spanName.setAttribute("class", "name_item_cart");
    spanPrix.setAttribute("class", "price_item_cart");
    fullMenu.forEach((platSource) => {
      platSource.forEach((e) => {
        if (e.name == plat.children[0].innerHTML) {
          spanName.textContent = e.name + " ";
          spanPrix.textContent = e.prix + " €";
          total = total + e.prix;
        }

        if (cartItems.includes) {
        }
      });
      divplat.append(spanName, spanPrix);
    });
    divcart.append(divplat);
  });
  console.log(total);
  aside.append(divcart);
  cartItems = [];
  // cartItems.forEach(plat => {
  //   let divcart = document.createElement("div");
  //   plat.forEach(item => {
  //     let spanName = document.createElement("span");
  //     let spanPrix = document.createElement("span");
  //     console.log(item[0]);
  //     spanName.textContent = item[0];
  //     console.log(item[3]);
  //     spanPrix.textContent = item[3];
  //     divcart.append(spanName);
  //     divcart.append(spanPrix);

  //   })

  // });
}

function cleanHTML() {
  main.querySelectorAll("section").forEach((element) => {
    element.remove();
  });
}
function ajoutPanier(params) {
  const btnPanier = document.querySelectorAll(".btnPanier");
  let card = document.getElementsByClassName("card");
  btnPanier.forEach((item) => {
    item.addEventListener("click", (e) => {
      cartItems.push(item.parentNode);
    });
  });
}

function listertrier() {
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
}
function darkMode() {
  bouton.addEventListener("click", () => {
    document.querySelector("main").classList.toggle("dark-mode");
  });
}
const checkout = document.querySelector("#checkout");
checkout.addEventListener("click", () => {
  displayedcart();
});

//#endregion

const listTri = document.querySelector(".listTri");
for (const iterator of listTri.children) {
  console.log(iterator);
  iterator.setAttribute("class", iterator.innerHTML.valueOf());
}
const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const cards = document.getElementsByClassName("card");
let cartItems = [];
let total = 0;

darkMode();
affichageHtml(fullMenu);
listertrier();


// affichageHtml([sortMenu(fullMenu)]);
// affichageHtml([filterMenu(fullMenu, ["poisson", ""])]);



//affichageHtml([sortMenu(fullMenu)]);
//affichageHtml([filterMenu(fullMenu, ["poisson", ""])]);

//listerPlat(sortMenu(fullMenu));
// ajout d'un bouton "ajout au panier sur les cards"

// //cards.forEach(function(card) {
//   const addButton = card.querySelector(".btnPanier");
//   addButton.addEventListener("click", function() {
//   });
// });

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
// function createPanier(card){
//   let itemPanier = document.createElement("div");
//   let namePanier = card.querySelector('h2');
//   let prixPanier = card.querySelector('.prixArticle');
//   console.log(prixPanier);
//   itemPanier.innerHTML = `<span>${namePanier.textContent}</span>`;
//   cart.appendChild(itemPanier);
// };
