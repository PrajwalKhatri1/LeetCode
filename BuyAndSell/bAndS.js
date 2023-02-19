let minPrice = Infinity; // initialize the minimum price to a very large number
  let maxProfit = 0; // initialize the maximum profit to 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      // update the minimum price
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      // update the maximum profit if selling on this day yields a better profit
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
