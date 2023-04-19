/*The Collection Array: contain all cards data*/
let prix = [2, 2, 3.5, 4, 5, 7, 8, 9, 10, 12];

const menuSushi = [
  {
    name: "Sushi Avocat",
    prix: prix[0],
    picture: "",
    categorie: ["sushi", "vege"],
    ingredients: ["Base riz", " avocat"],
  },
  {
    name: "Sushi Crevette",
    prix: prix[3],
    picture: "",
    categorie: ["sushi", "crustace"],
    ingredients: ["Base riz", " crevette"],
  },
  {
    name: "Sushi Daurade",
    prix: prix[3],
    picture: "",
    categorie: ["sushi", "poisson"],
    ingredients: ["Base riz", " daurade"],
  },
  {
    name: "Sushi Oeuf",
    prix: prix[0],
    picture: "",

    categorie: ["sushi", "oeuf"],
    ingredients: ["Base riz", " oeuf"],
  },
  {
    name: "Sushi Salmon Cheese",
    prix: prix[2],
    picture: "",
    categorie: ["sushi", "poisson", "lactose"],
    ingredients: ["Base riz", " saumon", " fromage"],
  },
  {
    name: "Sushi Saumon",
    prix: prix[0],
    picture: "",
    categorie: ["sushi", "poisson"],
    ingredients: ["Base riz", " saumon"],
  },

  {
    name: "Sushi Thon",
    prix: prix[2],
    picture: "",
    categorie: ["sushi", "poisson"],
    ingredients: ["Base riz", "  thon rouge"],
  },
];

const menuMaki = [
  {
    name: "Maki Avocat",
    prix: prix[0],
    picture: "",
    categorie: ["maki", "vege"]
    ingredients: ["Base riz-nori", " avocat"],
  },
  {
    name: "Maki Avocat Wasabi",
    prix: prix[2],
    picture: "",
    categorie: ["maki", "vege", "piquant"],
    ingredients: ["Base riz-nori", " avocat", " wasabi"],
  },
  {
    name: "Maki Cheese Avocat",
    prix: prix[2],
    picture: "",
    categorie: ["maki", "vege", "lactose"],
    ingredients: ["Base riz-nori", " avocat", " fromage"],
  },
  {
    name: "Maki Concombre",
    prix: prix[0],
    picture: "",

    categorie: ["maki", "vege"],
    ingredients: ["Base riz-nori", " concombre"],
  },
  {
    name: "Maki Daurade Kumquat",
    prix: prix[3],
    picture: "",
    categorie: ["maki", "vege"],
    ingredients: ["Base riz-nori", " daurade", " kumquat"],
  },
  {
    name: "Maki Saumon",
    prix: prix[0],
    picture: "",
    categorie: ["maki", "vege"],
    ingredients: ["Base riz-nori", " avocat", " saumon"],
  },
  {
    name: "Maki Thon",
    prix: prix[2],
    picture: "",
    categorie: ["maki", "poisson"],
    ingredients: ["Base riz-nori", " avocat", " thon rouge"],
  },
];

const menuRolls = [
  {
    name: "Cajun Roll",
    prix: prix[2],
    picture: "",
    categorie: ["rolls", "volaille", "oeuf"],
    ingredients: ["Base riz-nori", " poulet", " mayonnaise"],
  },
  {
    name: "California Nordic Roll",
    prix: prix[2],
    picture: "",
    categorie: ["rolls", "poisson"],
    ingredients: ["Base riz-nori", " saumon", " sésame"],
  },
  {
    name: "California Pacific",
    prix: prix[0],
    picture: "",

    categorie: ["rolls", "poisson"],
    ingredients: ["Base riz-nori", " saumon", " avocat", " ciboulette"],
  },
  {
    name: "California Saumon Avocat",
    prix: prix[2],
    picture: "",

    categorie: ["rolls", "poisson", "lactose"],
    ingredients: ["Base riz-nori", " saumon", " avocat"],
  },
  {
    name: "Daurade Wasabi",
    prix: prix[3],
    picture: "",

    categorie: ["rolls", "poisson", "piquant"],
    ingredients: ["Base riz-nori", " daurade", " wasabi"],
  },
  {
    name: "Dengaku Roll",
    prix: prix[0],
    picture: "",

    categorie: ["rolls", "vege", "piquant"],
    ingredients: ["Base riz-nori", " sésame", " wasabi", " aubergine"],
  },
  {
    name: "The upside Down Roll",
    prix: prix[0],
    picture: "",
    categorie: ["rolls", "vege", "oeuf"],
    ingredients: ["Base riz-nori", " chou rouge mariné", " mayonnaise"],
  },
];

const menuSashimi = [
  {
    name: "Sashimi Assortiment",
    prix: prix[7],
    picture: "",

    categorie: ["sashimi", "poisson", "vege"],
    ingredients: ["Tranche de saumon, thon et légume", " soja"],
  },
  {
    name: "Sashimi Légume",
    prix: prix[4],
    picture: "",

    categorie: ["sashimi", "vege"],
    ingredients: ["Tranche de légume", " soja"],
  },
  {
    name: "Sashimi Mixte Thon-Saumon",
    prix: prix[7],
    picture: "",
    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de Thon-Saumon", " soja"],
  },
  {
    name: "Sashimi Thon 5pcs",
    prix: prix[9],
    picture: "",

    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de thon", " soja"],
  },
  {
    name: "Sashimi Thon",
    prix: prix[4],
    picture: "",
    categorie: ["sashimi", "poisson"],
    ingredients: ["Tranche de thon", " soja"],
  },
];

const menuOnigiri = [
  {
    name: "Onigiri Nature",
    prix: prix[3],
    picture: "",

    categorie: ["onigiri", "vegan"],
    ingredients: ["Boule de riz", " sésame"],
  },
  {
    name: "Onigiri Oeuf",
    prix: prix[0],
    picture: "",
    categorie: ["onigiri", "oeuf"],
    ingredients: ["Boule de Riz", " oeuf"],
  },
  {
    name: "Onigiri Saumon",
    prix: prix[3],
    picture: "",

    categorie: ["onigiri", "poisson"],
    ingredients: ["Boule de riz", " saumon"],
  },
  {
    name: "Onigiri Thon",
    prix: prix[2],
    picture: "",

    categorie: ["onigiri", "poisson"],
    ingredients: ["Boule de Riz", " thon rouge"],
  },
  {
    name: "Onigiri Thon Mayo",
    prix: prix[2],
    picture: "",

    categorie: ["onigiri", "poisson", "oeuf"],
    ingredients: ["Boule de Riz", " thon", " mayonnaise"],
  },
];

const menuRamen = [
  {
    name: "Ramen Boeuf",
    prix: prix[6],
    picture: "",

    categorie: ["ramen", "viande"],
    ingredientss: ["Bouillon de nouille", " boeuf", " soja", " oignon ciboule"],
  },
  {
    name: "Ramen Canard",
    prix: prix[9],
    picture: "",

    categorie: ["ramen", "volaille", "crustace"],
    ingredientss: [
      "Bouillon de nouille",
      " canard",
      " oeuf",
      " naruto",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen Crevette",
    prix: prix[8],
    picture: "",

    categorie: ["ramen", "crustace"],
    ingredientss: [
      "Bouillon de nouille",
      " crevette",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen Légumes",
    prix: prix[6],
    picture: "",

    categorie: ["ramen", "vege"],
    ingredientss: [
      "Bouillon de nouille",
      " légumes",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen au poulet",
    prix: prix[0],
    picture: "",

    categorie: ["ramen", "volaille", "crustace"],
    ingredients: [
      "Bouillon de nouille",
      " poulet",
      " naruto",
      " soja",
      " oignon ciboule",
    ],
  },
  {
    name: "Ramen au porc",
    prix: prix[0],
    picture: "",

    categorie: ["ramen", "viande", "crustace"],
    ingredientss: [
      "Bouillon de nouille",
      " porc",
      " naruto",
      " soja",
      " oignon ciboule",
    ],
  },
];
const menuBoissons = [
  {
    name: "Spa",
    prix: prix[0],
    picture: "",  
    categorie: ["boisson", "non_petillant", "soft"],
  },
  {
    name: "Chaudfontaine eau pétillante",
    prix: prix[0],
    picture: "",
    categorie: ["boisson", "petillant", "soft"],
  },
  {
    name: "Coca Cola",
    prix: prix[0],
    picture: "",
    categorie: ["boisson", "petillant", "soft"],
  },
  {
    name: "Coca Cola Zero",
    prix: prix[0],
    picture: "",
    categorie: ["boisson", "petillant", "soft"],
  },
  {
    name: "Bière Asahi",
    prix: prix[0],
    picture: "",
    categorie: ["boisson", "petillant", "alcool"],
  },
  {
    name: "Saké Shirakabegura",
    prix: prix[0],
    picture: "",
    categorie: ["boisson", "non_petillant", "alcool"],
  },
  {
    name: "Saké Rihaku Le Poète Errant",
    prix: prix[0],
    picture: "",
    categorie: ["boisson", "non_petillant", "alcool"],
  },
];

const menuDessert = [
  {
    name: "Cheesecake",
    prix: prix[0],
    picture: "",
    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Moelleux au Chocolat",
    prix: prix[2],
    picture: "",
    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Mousse au Chocolat",
    prix: prix[2],
    picture: "",

    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Mochi Glacé Mangue",
    prix: prix[4],
    picture: "",

    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Mochi Glacé Coco",
    prix: prix[4],
    picture: "",

    categorie: ["dessert", "lactose", "vege"],
  },
  {
    name: "Salade de Fruits du Moment",
    prix: prix[2],
    picture: "",

    categorie: ["dessert", "vege"],
  },
  {
    name: "Mangue Fraîche",
    prix: prix[0],
    picture: "",

    categorie: ["dessert", "vege"],
  },
];

export const fullMenu = [
  menuSushi,
  menuMaki,
  menuRolls,
  menuSashimi,
  menuOnigiri,
  menuRamen,
  menuBoissons,
  menuDessert,
];
