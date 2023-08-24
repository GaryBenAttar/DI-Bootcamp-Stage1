// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// Part I:

// const makeJuice = function (size) {
//   const p = document.createElement("p");
//   const addIngredients = function (ing1, ing2, ing3) {
//     p.textContent = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`;
//   };
//   document.body.appendChild(p);
//   addIngredients("oranges", "passionfruit", "blueberries");
// };

// makeJuice("small");

// Part II:

const makeJuice = function (size) {
  let ingredients = [];
  const p = document.createElement("p");
  const addIngredients = function (ing1, ing2, ing3) {
    for (let i = 1; i < 4; i++) {
      ingredients[ingredients.length] = ing1;
    }
  };

  const displayJuice = function () {
    p.textContent = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`;
    document.body.appendChild(p);
  };

  addIngredients("oranges", "passionfruit", "blueberries");
  displayJuice();
};

makeJuice("small");
