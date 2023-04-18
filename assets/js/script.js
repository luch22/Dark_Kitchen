/*The Collection Array: contain all cards data*/
let prix = [2, 25, 35, 4, 5, 7, 8, 9, 10, 12]

const menuSushi = [
    {
        name: "Sushi Avocat",
        prix: "prix[0]",
        picture: "",
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
        picture: "",
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
        picture: "",
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
        picture: "",
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
        picture: "",
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
        picture: "",
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
        picture: "",
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

const menuMaki = [
    {
        name: "Maki Avocat",
        prix: "prix[0]",
        picture: "",
        classes: [
            "maki",
            "vege",
        ],
        ingredients: [
            "Base riz-nori",
            " avocat",
        ],
    },
    {
        name: "Maki Avocat Wasabi",
        prix: "prix[2]",
        picture: "",
        classes: [
            "maki",
            "vege",
            "piquant",
        ],
        ingredients: [
            "Base riz-nori",
            " avocat",
            " wasabi",
        ],
    },
    {
        name: "Maki Cheese Avocat",
        prix: "prix[2]",
        picture: "",
        classes: [
            "maki",
            "vege",
            "lactose",
        ],
        ingredients: [
            "Base riz-nori",
            " avocat",
            " fromage",
        ],
    },
    {
        name: "Maki Concombre",
        prix: "prix[0]",
        picture: "",
        classes: [
            "maki",
            "vege",
        ],
        ingredients: [
            "Base riz-nori",
            " concombre",
        ],
    },
    {
        name: "Maki Daurade Kumquat",
        prix: "prix[3]",
        picture: "",
        classes: [
            "maki",
            "vege",
        ],
        ingredients: [
            "Base riz-nori",
            " daurade",
            " kumquat",
        ],
    },
    {
        name: "Maki Saumon",
        prix: "prix[0]",
        picture: "",
        classes: [
            "maki",
            "vege",
        ],
        ingredients: [
            "Base riz-nori",
            " avocat",
            " saumon",
        ],
    },
    {
        name: "Maki Thon",
        prix: "prix[2]",
        picture: "",
        classes: [
            "maki",
            "poisson",
        ],
        ingredients: [
            "Base riz-nori",
            " avocat",
            " thon rouge",
        ],
    },
]

const menuRolls = [
    {
        name: "Cajun Roll",
        prix: "prix[2]",
        picture: "",
        classes: [
            "rolls",
            "volaille",
            "oeuf",
        ],
        ingredients: [
            "Base riz-nori",
            " poulet",
            " mayonnaise",
        ],
    },
    {
        name: "California Nordic Roll",
        prix: "prix[2]",
        picture: "",
        classes: [
            "rolls",
            "poisson",
        ],
        ingredients: [
            "Base riz-nori",
            " saumon",
            " sésame",
        ],
    },
    {
        name: "California Pacific",
        prix: "prix[0]",
        picture: "",
        classes: [
            "rolls",
            "poisson",
        ],
        ingredients: [
            "Base riz-nori",
            " saumon",
            " avocat",
            " ciboulette",
        ],
    },
    {
        name: "California Saumon Avocat",
        prix: "prix[2]",
        picture: "",
        classes: [
            "rolls",
            "poisson",
            "lactose",
        ],
        ingredients: [
            "Base riz-nori",
            " saumon",
            " avocat",
        ],
    },
    {
        name: "Daurade Wasabi",
        prix: "prix[3]",
        picture: "",
        classes: [
            "rolls",
            "poisson",
            "piquant",
        ],
        ingredients: [
            "Base riz-nori",
            " daurade",
            " wasabi",
        ],
    },
    {
        name: "Dengaku Roll",
        prix: "prix[0]",
        picture: "",
        classes: [
            "rolls",
            "vege",
            "piquant",
        ],
        ingredients: [
            "Base riz-nori",
            " sésame",
            " wasabi",
            " aubergine",
        ],
    },
    {
        name: "The upside Down Roll",
        prix: "prix[0]",
        picture: "",
        classes: [
            "rolls",
            "vege",
            "oeuf",
        ],
        ingredients: [
            "Base riz-nori",
            " chou rouge mariné",
            " mayonnaise",
        ],
    },

]

const menuSashimi = [
    {
        name: "Sashimi Assortiment",
        prix: "prix[7]",
        picture: "",
        classes: [
            "sashimi",
            "poisson",
            "vege",
        ],
        ingredients: [
            "Tranche de saumon, thon et légume",
            " soja",
        ],
    },
    {
        name: "Sashimi Légume",
        prix: "prix[4]",
        picture: "",
        classes: [
            "sashimi",
            "vege",
        ],
        ingredients: [
            "Tranche de légume",
            " soja",
        ],
    },
    {
        name: "Sashimi Mixte Thon-Saumon",
        prix: "prix[7]",
        picture: "",
        classes: [
            "sashimi",
            "poisson",
        ],
        ingredients: [
            "Tranche de Thon-Saumon",
            " soja",
        ],
    },
    {
        name: "Sashimi Saumon 5pcs",
        prix: "prix[8]",
        picture: "",
        classes: [
            "rolls",
            "poisson",
        ],
        ingredients: [
            "Tranche de Saumon",
            " soja",
        ],
    },
    {
        name: "Sashimi Saumon",
        prix: "prix[5]",
        picture: "",
        classes: [
            "rolls",
            "poisson",
        ],
        ingredients: [
            "Tranche de Saumon",
            " soja",
        ],
    }
]
