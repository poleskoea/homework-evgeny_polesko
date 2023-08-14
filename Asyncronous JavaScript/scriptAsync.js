import calcProfit from "../Scripts/calcProfit.js";

const calcProfit2 = async function () {
  try {
    const res = await fetch("./Asyncronous JavaScript/data.json");
    const data = await res.json();
    Object.values(data.dishes).map((dish) => {
      calcProfit(dish, data.prices);
    });
  } catch (err) {
    console.error(err);
  }
};

calcProfit2();
