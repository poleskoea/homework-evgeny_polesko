import calcProfit from "../Scripts/calcProfit.js";

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

try {
  let food = {};
  getJSON("./Asyncronous JavaScript/food.json")
    .then((data) => {
      food = data;
      return getJSON("./Asyncronous JavaScript/prices.json");
    })
    .then(({ prices }) => {
      Object.values(food.dishes).map((dish) => {
        calcProfit(dish, prices);
      });
    });
} catch (err) {
  console.error(err);
}
