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
          unity: 'càs',
          value: 2
        },
      },
      {
        name: 'Levure boulangère',
        quantity: {
          unity: 'càc',
          value: 1.5
        },
      },
      {
        name: 'Sel',
        quantity: {
          unity: 'càc',
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
  },
  {
    name: 'blanquette de veau',
    category: 'plat principal',
    ingredients: [{
        name: 'blanquette de veau',
        quantity: {
          unity: 'kg',
          value: 1
        }
      },
      {
        name: 'carotte',
        quantity: {
          unity: 'g',
          value: 300
        },
      },
      {
        name: 'vin blanc sec',
        quantity: {
          unity: 'l',
          value: 0.25
        },
      }, {
        name: 'oignon',
        quantity: {
          unity: 'g',
          value: 150
        },
      }, , {
        name: 'champignons de paris',
        quantity: {
          unity: 'g',
          value: 100
        },
      }, , {
        name: 'citron',
        quantity: {
          unity: 'g',
          value: 50
        },
      }, {
        name: 'farine de blé',
        quantity: {
          unity: 'g',
          value: 40
        },
      }, {
        name: 'jaune d\'oeuf',
        quantity: {
          unity: 'g',
          value: 30
        },
      }, , {
        name: 'clous de girofle',
        quantity: {
          unity: 'g',
          value: 3
        },
      }
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/recipe-finder-a7ec2.appspot.com/o/images%2Fdefault%2FBlanquette%20de%20veau.jpeg?alt=media&token=8f753d72-b6d4-4050-9715-9cc792dd87ba',
    persons: 4,
    time: {
      unity: 'h',
      value: 2
    },
    default: true,
    description: "Eplucher les carottes et les découper en rondelles. Peler et émincer l’oignon, et découper les champignons en lamelles. Dans une cocotte, faire revenir la viande dans le beurre jusqu’ à ce qu’ elle soit légèrement dorée.Ajouter la farine, 2 verres d’ eau et remuer bien.Ajouter les clous de girofle et le vin blanc.Verser de l 'eau à hauteur. Mettre les carottes, l 'oignon et les champignons dans la cocotte. Faire mijoter pendant 1h30 à feu doux. Ajouter un peu d’eau en cours de cuisson si nécessaire. En fin de cuisson, dans un bol, mélanger la crème avec le jaune d’ œuf et le jus du demi - citron.Ajouter cette sauce dans la cocotte, saler, poivrer.Mélanger et servir aussitôt.",
  },
  {
    name: 'Poulet rôti au paprika',
    category: 'plat principal',
    ingredients: [{
        name: 'poulet',
        quantity: {
          unity: 'kg',
          value: 1.30
        }
      },
      {
        name: 'paprika',
        quantity: {
          unity: 'g',
          value: 15
        }
      },
      {
        name: 'sel',
        quantity: {
          unity: 'g',
          value: 1
        }
      },
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/recipe-finder-a7ec2.appspot.com/o/images%2Fdefault%2FPoulet%20ro%CC%82ti%20au%20paprika.jpeg?alt=media&token=2cb1ed82-9f82-40cd-ab0b-60e1902cd3de',
    persons: 6,
    time: {
      unity: 'min',
      value: 45
    },
    default: true,
    description: "Préchauffer le four à 180°C. Placer le poulet dans un plat adapté à la cuisson au four.Verser un fond d 'eau dans le plat. Saler le poulet et saupoudrer généreusement celui-ci de paprika. Enfourner durant 45 minutes.",
  },
  {
    name: 'Ratatouille',
    category: 'plat principal',
    ingredients: [{
        name: 'tomates',
        quantity: {
          unity: 'g',
          value: 520
        }
      },
      {
        name: 'Aubergine',
        quantity: {
          unity: 'g',
          value: 225
        }
      },
      {
        name: 'courgette',
        quantity: {
          unity: 'g',
          value: 200
        }
      },
      {
        name: 'oignon',
        quantity: {
          unity: 'g',
          value: 200
        }
      },
      {
        name: 'poivron rouge',
        quantity: {
          unity: 'g',
          value: 160
        }
      },
      {
        name: 'huile d\'olive',
        quantity: {
          unity: 'càs',
          value: 4
        }
      },
      {
        name: 'feuille de l\'aurier',
        quantity: {
          unity: 'u',
          value: 5
        }
      },
      {
        name: 'sel',
        quantity: {
          unity: 'g',
          value: 1
        }
      },
      {
        name: 'poivre',
        quantity: {
          unity: 'g',
          value: 1
        }
      },

    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/recipe-finder-a7ec2.appspot.com/o/images%2Fdefault%2FRatatouille%20.jpeg?alt=media&token=11348cb8-53d4-4e4c-bf7e-3888a1a3fd0b',
    persons: 4,
    time: {
      unity: 'h',
      value: 1.25
    },
    default: true,
    description: "Découper les tomates, l 'aubergine, le poivron et la courgette en dés. Peler et émincer les oignons. Dans une sauteuse, disposer les dés de tomates, de l 'aubergine, du poivron, de la courgette et les émincés d'oignons.Ajouter l 'huile d'olive et les feuilles de laurier.Saler et poivrer. Faire mijoter durant 60 minutes à feu doux en remuant régulièrement.Servir chaud.",
  },
  {
    name: 'Tarte aux deux chocolats',
    category: 'dessert',
    ingredients: [{
        name: 'pâte sucrée au cacao faite maison',
        quantity: {
          unity: 'g',
          value: 300
        }
      },
      {
        name: 'crème liquide',
        quantity: {
          unity: 'l',
          value: 0.2
        }
      },
      {
        name: 'cacao',
        quantity: {
          unity: 'l',
          value: 0.08
        }
      },
      {
        name: 'cacao',
        quantity: {
          unity: 'g',
          value: 60
        }
      },
      {
        name: 'chocolat noir amer',
        quantity: {
          unity: 'g',
          value: 250
        }
      },
      {
        name: 'oeuf de poule',
        quantity: {
          unity: 'u',
          value: 1
        }
      },
      {
        name: 'beurre',
        quantity: {
          unity: 'g',
          value: 5
        }
      },
    ],
    image: 'https://firebasestorage.googleapis.com/v0/b/recipe-finder-a7ec2.appspot.com/o/images%2Fdefault%2Ftarte-aux-deux-chocolats.jpg?alt=media&token=b1e568c6-0419-473f-96ff-2ff92f2a7e55',
    persons: 6,
    time: {
      unity: 'min',
      value: 50
    },
    default: true,
    description: "Préchauffez le four à th.6 (180°). Chauffez le lait et la crème dans une casserole à fond épais. Hors du feu, ajoutez le chocolat haché. Remuez jusqu 'à ce qu'il soit fondu.Laissez refroidir. Pendant ce temps,beurrez un moule à tarte, tapissez - le de papier sulfurisé beurré.Placez la pâte dedans en la laissant dépasser du bord.Piquez - la à la fourchette.Couvrez - la de papier sulfurisé garni de haricots secs.Faites cuire le fond 15 min.Retirez le papier et les haricots du fond.Laissez refroidir.Ajoutez l 'oeuf et le jaune à la crème au chocolat en fouettant. Versez - la dans le fond de tarte.Remettez la tarte à cuire 15 min en protégeant le bord avec du papier aluminium. Démoulez - la sur un plat.Servez - la tiède ou froide saupoudrée de cacao, décorée à votre goût.",
  }
];

module.exports = recipes;