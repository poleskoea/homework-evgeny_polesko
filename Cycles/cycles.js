// Выведите все четные числа до 10 включительно. ⭐не используйте оператор **continue**.
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Создайте бесконечный цикл и прервите его на 5ой итерации.
let i = 0;
while (true) {
  i++;
  console.log(`Iteration ${i}`);
  if (i === 5) break;
}

// Создайте массив блюд, с названием, ингредиентами, ценой приготовления и ценой реализации. (прямо как в уроке номер 8) Посчитайте с помощью цикла профит для каждого блюда и запишите его в объект блюда. ⭐Не задавайте цену приготовления сразу. Задайте массив ингредиентов. Отдельно создайте объект хранящий стоимость этих ингредиентов. Посчитайте стоимость приготовления динамически (с помощью цикла)
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
for (dish of foodArray) countCost(dish);
// countCost(sagudai);
// countCost(sushi);
// countCost(borsch);
// countCost(pancakes);
console.log(foodArray);

let totalProfit = 0;
// for (let i = 0; i < foodArray.length; i++) {
//   const profit = foodArray[i].price - foodArray[i].cost;
//   console.log(`Profit from ${foodArray[i].dishName} : ${profit}`);
//   totalProfit += profit;
// }

foodArray.forEach((dish) => {
  const profit = dish.price - dish.cost;
  console.log(`Profit from ${dish.dishName} : ${profit}`);
  totalProfit += profit;
});
console.log(`Total profit: ${totalProfit}`);
