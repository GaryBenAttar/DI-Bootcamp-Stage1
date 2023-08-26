// Exercise 3: User & Id

// Instructions

// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };

let usersArr = Object.entries(users);

console.log(usersArr);

const usersArrTwo = function (arr) {
  let newArr = [];
  let idbyTwo = Object.values(arr);
  let keys = Object.keys(arr);

  //   idbyTwo.forEach((e) => newArr.concat([keys[e], idbyTwo[e] * 2]));
  for (let i = 0; i < keys.length; i++) {
    newArr = newArr.concat(keys[i], idbyTwo[i] * 2);
  }
  return newArr;
};

console.log(usersArrTwo(users));
