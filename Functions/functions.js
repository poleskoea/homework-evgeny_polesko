// Import of the calcProfit fucntion
import calcProfit from "../Scripts/calcProfit.js";
import smallerNumber from "../Scripts/smallerNumber.js";

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

// Using imported functions
sagudai.profit = calcProfit(sagudai, ingrPrices);
borsch.profit = calcProfit(borsch, ingrPrices);
console.log(sagudai, borsch);

console.log(smallerNumber(4, 4));
console.log(smallerNumber(4, 7));
console.log(smallerNumber(4, -7));
console.log(smallerNumber(4, 0));

/// OOP
// class Dish {
//   cost = 0;
//   profit = 0;
//   constructor(name, ingredients, price) {
//     this.name = name;
//     this.ingredients = ingredients;
//     this.price = price;
//   }
//   calcCost(ingrPrices) {
//     for (ingredient of this.ingredients) {
//       this.cost += ingrPrices[ingredient];
//     }
//     return this.cost;
//   }
//   calcProfit() {
//     this.profit = this.price - this.cost;
//     return this.profit;
//   }
//   set newPrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const sushi = new Dish(
//   "Sushi",
//   ["salmon", "rice", "salt", "nori", "water"],
//   450
// );
// sushi.calcCost(ingrPrices);
// sushi.calcProfit();
// console.log(sushi);
// sushi.newPrice = 500;
// console.log(sushi);
