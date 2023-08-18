import calcProfit from "../Scripts/calcProfit.js";

const getJSON = async function (url, errorMsg = "Something went wrong") {
  const response = await fetch(url);

  if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
  return response.json();
};

const calcProfitAsync = async function () {
  try {
    const { dishes } = await getJSON("./Asyncronous JavaScript/food.json");
    const { prices } = await getJSON("./Asyncronous JavaScript/prices.json");

    Object.values(dishes).map((dish) => {
      calcProfit(dish, prices);
    });
  } catch (err) {
    console.error(err);
  }
};

calcProfitAsync();
