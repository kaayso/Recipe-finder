const recipes = [{
  name: 'Galette algérienne',
  category: 'Pain',
  ingredients: [{
      name: 'Semoule grosse',
      quantity: {
        unity: 'g',
        value: 500
      },
    },
    {
      name: "Huile d'olive",
      quantity: {
        unity: 'c/s',
        value: 2
      },
    },
    {
      name: 'Levure boulangère',
      quantity: {
        unity: 'c/c',
        value: 1.5
      },
    },
    {
      name: 'Sel',
      quantity: {
        unity: 'c/c',
        value: 1
      },
    },
  ],
  image: 'https://firebasestorage.googleapis.com/v0/b/recipe-finder-a7ec2.appspot.com/o/images%2Fdefault%2Fgalette_algerienne.jpeg?alt=media&token=4d630f8f-d73a-4283-b815-0ef99b9cef05',
  persons: 4,
  time: {
    unity: 'min',
    value: 30
  },
  default: true,
  description: "Mélanger la semoule, l'huile, le sel et la levure dans un grand récipient (ex : saladier). Ajouter l'eau tiède petit à petit tout en malaxant le mélange jusqu'à obtenir une pâte souple mais compacte. Bien pétrir sur une table en aérant la pâte. Diviser la pâte en deux boules de pâtes. Aplatir chacune des deux boules de pâte à l'aide d'un rouleau à pâtisserie pour obtenir deux galettes bien rondes d'un peu moins d'un cm d'épaisseur. Laisser reposer 30 min les deux galettes en les recouvrant d'un torchon. Faire cuire les galettes dans une crêpière à feu moyen - fort des deux côtés. Faire tourner les galettes pendant la cuisson pour obtenir une couleur doré homogène. Durant la cuisson la pâte est susceptible de gonfler par endroits, du coup faire des troues à l'aide d'une fourchette.",
}];

module.exports = recipes;