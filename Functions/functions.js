// 1. Напишите функцию принимающую два числа и возвращающую меньшее из них.
const smallerNumber = function (a, b) {
  return a < b ? a : b;
};
console.log(smallerNumber(4, 7));
console.log(smallerNumber(4, -7));
console.log(smallerNumber(4, 0));

// 2. Напишите функцию, которая будет считать профит от продажи блюда из прошлого задания. В эту функцию должны передаваться все данные для расчета профита, результат расчетов присвойте в объект блюда.

// Если стоимость уже посчитана
const calcDishProfit = function (dish) {
  return dish.price - dish.cost;
};

// Если стоимость ещё не посчитана
const calcDishProfit2 = function (dish, ingrPrices) {
  let cost = 0;
  for (ingredient of dish.ingredients) {
    cost += ingrPrices[ingredient];
  }
  const profit = dish.price - cost;
  console.log(`Profit from ${dish.dishName} = ${profit}`);
  return profit;
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
  dish.profit = calcDishProfit2(dish, ingrPrices);
}
console.log(foodArray);
/// OOP
class Dish {
  cost = 0;
  profit = 0;
  constructor(name, ingredients, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.price = price;
  }
  calcCost(ingrPrices) {
    for (ingredient of this.ingredients) {
      this.cost += ingrPrices[ingredient];
    }
    return this.cost;
  }
  calcProfit() {
    this.profit = this.price - this.cost;
    return this.profit;
  }
  set newPrice(newPrice) {
    this.price = newPrice;
  }
}

const sushi = new Dish(
  "Sushi",
  ["salmon", "rice", "salt", "nori", "water"],
  450
);
sushi.calcCost(ingrPrices);
sushi.calcProfit();
console.log(sushi);
sushi.newPrice = 500;
console.log(sushi);
