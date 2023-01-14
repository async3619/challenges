function maxProfit(prices: number[]): number {
    let minimum = -1;
    let maxProfit = -1;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        if (minimum === -1 || minimum > price) {
            minimum = price;
        }

        maxProfit = Math.max(price - minimum, maxProfit);
    }

    return maxProfit;
}
