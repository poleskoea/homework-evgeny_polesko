// 1. Напишите функцию принимающую два числа и возвращающую меньшее из них.
const smallerNumber = function (a, b) {
  return a < b ? a : b;
};
console.log(smallerNumber(4, 7));
console.log(smallerNumber(4, -7));
console.log(smallerNumber(4, 0));

// 2. Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.

// Если стоимость уже посчитана
const countProfit = function (dish) {
  dish.profit = dish.price - dish.cost;
};

// Если стоимость ещё не посчитана
const countProfit2 = function (dish, ingredientsPrice) {
  dish.cost = 0;
  for (ingredient of dish.ingredients) {
    dish.cost += ingredientsPrice[ingredient];
  }
  dish.profit = dish.price - dish.cost;
  console.log(`Profit from ${dish.dishName} = ${dish.profit}`);
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
const foodArray = [borsch, sagudai];

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

for (dish of foodArray) {
  countProfit2(dish, ingrPrices);
}
