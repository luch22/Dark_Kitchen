const menuSushi = [
    {
        name: "Sushi Avocat",
        prix: "prix[0]",
        picture: "../images/sushi-avocat.jpeg",
        classes: [
            "sushi",
            "vege",
        ],
        ingredients: [
            "Base riz",
            " avocat",
        ],
    },
    {
        name: "Sushi Crevette",
        prix: "prix[3]",
        picture: "../images/sushi-crevette.jpeg",
        classes: [
            "sushi",
            "crustacé",
        ],
        ingredients: [
            "Base riz",
            " crevette",
        ],
    },
    {
        name: "Sushi Daurade",
        prix: "prix[3]",
        picture: "../images/sushi-daurade.jpeg",
        classes: [
            "sushi",
            "poisson",
        ],
        ingredients: [
            "Base riz",
            " daurade",
        ],
    },
    {
        name: "Sushi Oeuf",
        prix: "prix[0]",
        picture: "../images/sushi-oeufs.jpeg",
        classes: [
            "sushi",
            "oeuf",
        ],
        ingredients: [
            "Base riz",
            " oeuf",
        ],
    },
    {
        name: "Sushi Salmon Cheese",
        prix: "prix[2]",
        picture: "../images/sushi-saumon-fromage.jpeg",
        classes: [
            "sushi",
            "poisson",
            "lactose",
        ],
        ingredients: [
            "Base riz",
            " saumon",
            " fromage",
        ],
    },
    {
        name: "Sushi Saumon",
        prix: "prix[0]",
        picture: "../images/sushi-saumon.jpeg",
        classes: [
            "sushi",
            "poisson",
        ],
        ingredients: [
            "Base riz",
            " saumon",
        ],
    },

    {
        name: "Sushi Thon",
        prix: "prix[2]",
        picture: "../images/sushi-thon.jpeg",
        classes: [
            "sushi",
            "poisson",
        ],
        ingredients: [
            "Base riz",
            "  thon rouge",
        ],
    },
]

const container = document.querySelector(".container");
  
menuSushi.forEach((object) => {
  const card = document.createElement("div");
  card.classList.add("card");



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
  prix.textContent = "Prix : " + object.prix;
  cardBody.appendChild(prix);

  
  let classes = document.createElement("span");
  classes.classList.add("item");
  classes.textContent = "Catégories : " + object.classes;
  cardBody.appendChild(classes); 

  let ingredients = document.createElement("span");
  ingredients.classList.add("item");
  ingredients.textContent = "Ingredients : " + object.ingredients;
  cardBody.appendChild(ingredients); 


  container.appendChild(card);
});