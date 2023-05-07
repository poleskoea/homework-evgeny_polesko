// Создайте несколько объектов для вашей любимой еды, опишите их в этих объектах

let sushi = {
  dishName: "Sushi",
  salmon: 150,
  rice: 500,
  salt: 10,
  nori: 10,
  water: 300,
};

let pancakes = {
  dishName: "Pancakes",
  milk: 500,
  egg: 2,
  flour: 200,
  sugar: 30,
  salt: 3,
};

let borsch = {
  dishName: "Borsch",
  meat: 500,
  cabbage: 200,
  beetroot: 200,
  carrot: 2,
  water: 1.5,
  tomato: 2,
};

let sagudai = {
  dishName: "Sagudai",
  fish: 1,
  salt: 5,
  oil: 10,
  onion: 1,
  vinegar: 1,
};

// Создайте массив из этих объектов.
const foodArray = [sushi, borsch, sagudai, pancakes];

// Удалите одно блюдо из массива еды.
foodArray.pop();

// Добавьте этот блюдо обратно на первое место, но уберите один из ингредиентов этого блюда.
delete pancakes.salt;
foodArray.unshift(pancakes);

// Представьте что это меню вашего будущего ресторана, укажите сколько вы потратите на приготовление и за сколько будете их продавать.
const addCostAndPrice = function (dish, cost, price) {
  dish.cost = cost;
  dish.price = price;
};

addCostAndPrice(pancakes, 60, 150);
addCostAndPrice(sushi, 100, 300);
addCostAndPrice(borsch, 100, 240);
addCostAndPrice(sagudai, 100, 250);

// Посчитайте сколько вы заработаете на каждом проданном блюде
let totalProfit = 0;
for (let i = 0; i < foodArray.length; i++) {
  const profit = foodArray[i].price - foodArray[i].cost;
  console.log(`Profit from ${foodArray[i].dishName} : ${profit}`);
  totalProfit += profit;
}
console.log(`Total profit: ${totalProfit}`);

// Удалите из массива все элементы кроме одного.
for (let i = foodArray.length; i > 1; i--) {
  foodArray.pop();
}
