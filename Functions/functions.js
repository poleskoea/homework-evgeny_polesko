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
