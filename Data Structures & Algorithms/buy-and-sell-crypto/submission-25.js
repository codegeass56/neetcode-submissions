class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //sliding window using two pointers
    //dp solution optimizes the sliding window solution by removing conditionals
    maxProfit(prices) {
        let maxProfit = 0;
        let minBuyingPrice = prices[0];

        for (let sellingDay = 1; sellingDay < prices.length; sellingDay++) {
            if (prices[sellingDay] < minBuyingPrice) minBuyingPrice = prices[sellingDay]
            const curr_profit = prices[sellingDay] - minBuyingPrice;
            if (curr_profit > maxProfit) maxProfit = curr_profit;
        }

        return maxProfit;
    }
}
