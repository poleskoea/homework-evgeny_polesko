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

// Перепишите цикл, который считает себестоимость блюда из прошлых заданий на функцию, которая использует `reduce` .

const countCost = function (dish, prices) {
  return dish.ingredients.reduce((cost, ingr) => (cost += prices[ingr]), 0);
};
console.log(countCost(pancakes, ingrPrices));

// Используйте `map` , чтобы получить массив с объектами в которых содержится только название и стоимость каждого блюда.
const nameAndPrice = foodArray.map((dish) => {
  //  1) return ({ dishName, price } = dish), { dishName, price };

  // Задался вопросом как оптимально из объекта А скопировать нужные свойства в объект Б, нашёл данный способ. Понимаю, что это restructuring assignment внутри IIFE. Способ 1) немного проще, но создает переменные в global scope
  return (({ dishName, price }) => ({ dishName, price }))(dish);
});
console.log(nameAndPrice);
console.log(foodArray);

// Определите, есть ли в меню хоть одно вегетарианское блюдо, используя `some`
const checkVegDish = function (dish) {
  return (
    !dish.ingredients.includes("meat") &&
    !dish.ingredients.includes("salmon") &&
    !dish.ingredients.includes("omul")
  );
};

const haveVegDish = foodArray.some((dish) => checkVegDish(dish));
console.log(haveVegDish);

// Определите, полностью ли у вас вегетарианское меню с помощью `every`.
const vegetarianMenuOnly = foodArray.every((dish) => checkVegDish(dish));
console.log(vegetarianMenuOnly);

// Создайте массив с вегетарианскими блюдами с помощью filter.
const vegMenu = foodArray.filter((dish) => checkVegDish(dish));
console.log(vegMenu);
