// Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// // Создайте бесконечный цикл и прервите его на 5ой итерации.
// let i = 0;
// while (true) {
//   i++;
//   console.log(`Iteration ${i}`);
//   if (i === 5) break;
// }

// global variable
let menu = "";

let sushi = {
  dishName: "Sushi",
  ingredients: ["salmon", "rice", "salt", "nori", "water"],
  price: 450,
};

let pancakes = {
  dishName: "Pancakes",
  ingredients: ["milk", "egg", "flour", "sugar", "salt"],
  price: 250,
};

let borsch = {
  dishName: "Borsch",
  ingredients: ["meat", "cabbage", "beetroot", "carrot", "water", "tomato"],
  price: 270,
};

let sagudai = {
  dishName: "Sagudai",
  ingredients: ["omul", "salt", "oil", "onion", "vinegar"],
  price: 300,
};
const foodArray = [sushi, pancakes, borsch, sagudai];

const ingrPrices = {
  omul: 190,
  salt: 10,
  oil: 20,
  onion: 15,
  vinegar: 15,
  carrot: 7,
  tomato: 10,
  beetroot: 12,
  water: 0,
  cabbage: 16,
  meat: 130,
  sugar: 20,
  flour: 40,
  egg: 70,
  milk: 20,
  salmon: 240,
  rice: 50,
  nori: 60,
};

const countCost = function (dish) {
  dish.cost = 0;
  for (let i = 0; i < dish.ingredients.length; i++) {
    const ingr = dish.ingredients[i];
    dish.cost += ingrPrices[ingr];
  }
};

for (dish of foodArray) {
  countCost(dish);
  dish.profit = dish.price - dish.cost;
  // локальная переменная с инфо о блюде
  const dishInfo = `${dish.dishName}`.padEnd(30, ".") + `${dish.price}₽\n`;
  // добавление в глобальную переменную меню
  menu += dishInfo;
}

const totalProfit = foodArray
  .map((dish) => dish.profit)
  .reduce((acc, profit) => acc + profit);

console.log(foodArray);
console.log(menu);
console.log(totalProfit);

// let totalProfit = 0;
// for (let i = 0; i < foodArray.length; i++) {
//   const profit = foodArray[i].price - foodArray[i].cost;
//   console.log(`Profit from ${foodArray[i].dishName} : ${profit}`);
//   totalProfit += profit;
// }

// foodArray.forEach((dish) => {
//   profit = dish.price - dish.cost;
//   // console.log(`Profit from ${dish.dishName} : ${profit}`);
//   totalProfit += profit;
//   const dishInfo = `${dish.dishName}`.padEnd(30, ".") + `${dish.price}₽\n`;
//   menu += dishInfo;
// });
// console.log(`Total profit: ${totalProfit}`);
