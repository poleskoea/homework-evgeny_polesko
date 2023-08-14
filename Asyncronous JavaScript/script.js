import calcProfit from "../Scripts/calcProfit.js";

try {
  fetch("./Asyncronous JavaScript/data.json")
    .then((res) => res.json())
    .then((data) => {
      Object.values(data.dishes).map((dish) => {
        calcProfit(dish, data.prices);
      });
    });
} catch (err) {
  console.error(err);
}
