// Calculate profit of a dish
export default function (dish, ingrPrices) {
  let cost = 0;
  for (let ingredient of dish.ingredients) {
    cost += ingrPrices[ingredient];
  }
  const profit = dish.price - cost;
  console.log(`Profit from ${dish.dishName} = ${profit}`);
  return profit;
}
