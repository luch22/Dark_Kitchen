// const menuSushi1 = [
//   {
//     name: "Nom1",
//     prix: 3,
//     picture: "",
//     classes: ["test1", "test2"],
//     ingredient: ["", "", ""],
//   },
//   {
//     name: "Nom2",
//     prix: 4,
//     picture: "",
//     classes: ["test1", "test3"],
//     ingredient: ["", "", ""],
//   },
// ];
// const menuSushi2 = [
//   {
//     name: "Nom3",
//     prix: 5,
//     picture: "",
//     classes: ["test3"],
//     ingredient: ["", "", ""],
//   },
// ];

// let listFilre = ["test1"];
// let listeMenu = [menuSushi1, menuSushi2];
// let filters = filter(listeMenu, listFilre);
// console.log(filters);

function filter(listMenu, tags) {
  var monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.classes.forEach((element) => {
        if (tags.includes(element)) {
          monTableau.push(plat);
        }
      });
    });
  });
  return monTableau;
}
