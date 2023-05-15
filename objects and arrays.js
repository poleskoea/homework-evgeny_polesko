// Создайте несколько объектов для вашей любимой еды, опишите их в этих объектах

let sushi = {
  dishName: "Sushi",
  ingredients: ["salmon", "rice", "salt", "nori", "water"],
};

let pancakes = {
  dishName: "Pancakes",
  ingredients: ["milk", "egg", "flour", "sugar", "salt"],
};

let borsch = {
  dishName: "Borsch",
  ingredients: ["meat", "cabbage", "beetroot", "carrot", "water", "tomato"],
};

let sagudai = {
  dishName: "Sagudai",
  ingredients: ["omul", "salt", "oil", "onion", "vinegar"],
};

const foodPrices = {
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
  let cost = 0;
  for (let i = 0; i < dish.ingredients.length; i++) {
    const ingr = dish.ingredients[i];
    cost += foodPrices[ingr];
  }
  return cost;
};

// Создайте массив из этих объектов.
const foodArray = [sushi, borsch, sagudai, pancakes];

// // Удалите одно блюдо из массива еды.
foodArray.pop();

// // Добавьте этот блюдо обратно на первое место, но уберите один из ингредиентов этого блюда.
delete pancakes.salt;
foodArray.unshift(pancakes);

// Представьте что это меню вашего будущего ресторана, укажите сколько вы потратите на приготовление и за сколько будете их продавать.
sagudai.cost = countCost(sagudai);
sushi.cost = countCost(sushi);
borsch.cost = countCost(borsch);
pancakes.cost = countCost(pancakes);

sagudai.price = 300;
sushi.price = 399;
borsch.price = 220;
pancakes.price = 200;

// // Посчитайте сколько вы заработаете на каждом проданном блюде
let totalProfit = 0;
for (let i = 0; i < foodArray.length; i++) {
  const profit = foodArray[i].price - foodArray[i].cost;
  console.log(`Profit from ${foodArray[i].dishName} : ${profit}`);
  totalProfit += profit;
}
console.log(`Total profit: ${totalProfit}`);

// // Удалите из массива все элементы кроме одного.
for (let i = foodArray.length; i > 1; i--) {
  foodArray.pop();
}
