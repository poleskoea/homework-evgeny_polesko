import calcProfit from "./Scripts/calcProfit";

const calcProfit2 = async function () {
  const res = await fetch("./Asyncronous JavaScript/dishes.json");
  const data = await res.json();
  Object.values(data.dishes).map((dish) => {
    calcProfit(dish, data.prices);
  });
};

calcProfit2();
