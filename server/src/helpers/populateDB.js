// const fs = require('fs');
const Recipe = require('../models/Recipe');
const Ingredient = require('../models/Ingredient');
const recipes = require('../assets/recipes');
const ingredients = require('../assets/ingredients');

// const ingredients = [];


// const ingPaths = fs.readdirSync('./src/assets/images/starchy');

// ingPaths.forEach((path) => {
//   const name = path.split('.')[0].split('-').join(' ').split(':').join('/');
//   ingredients.push({
//     name,
//     category: 'Féculents',
//     image: `/images/starchy/${path}`,
//   });
// });
// console.log(ingredients);

// getVegtables();
// console.log(ingredients);
// // console.log(ingredientsName.length);
// console.log(vegetablesPaths.length);
// const ob = ingredients.map((i) => i.name);
// console.log(ingredientsName.filter((x) => !ob.includes(x)));
// console.log(vegetablesPaths);

// console.log(ingredientsName);
// vegetablesPaths.forEach((p) => {
//   let ss = '';
//   // if (ss.charAt(0) === 'x') ss = ss.substring(1);
//   // ss = ss.split('').reverse().join('').substring(28)
//   //   .split('')
//   //   .reverse()
//   //   .join('');
//   fs.renameSync(`./src/assets/images/vegetables/${p}`, `./src/assets/images/vegetables/${ss}`);
//   if (p.indexOf('-liste-herbes-aromatiques') !== -1) {
//     ss = `${p.split('').reverse().join('').substring(29)
//       .split('')
//       .reverse()
//       .join('')}.jpg`;
//     fs.renameSync(`./src/assets/images/vegetables/${p}`, `./src/assets/images/vegetables/${ss}`);
//   }
//   console.log(ss);
// });

const populateDb = () => {
  console.log('Populate database...');
  // add ingredients
  ingredients.forEach((ing) => {
    const ingredient = new Ingredient(ing);
    ingredient.save((err) => {
      if (err) {
        console.error(`Error : ${ingredient.name} not saved in db.`);
        return process.exit(1);
      }
    });
  });
  console.log('   ✓ | Ingredients');

  // add recipes
  recipes.forEach((rec) => {
    const recipe = new Recipe(rec);
    recipe.save((err) => {
      if (err) {
        console.error(`Error : ${recipe.name} not saved in db.`);
        return process.exit(1);
      }
    });
  });
  console.log('   ✓ | recipes');
};

module.exports = populateDb;