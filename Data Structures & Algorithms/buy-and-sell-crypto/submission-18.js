class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //sliding window using two pointers
    //dp solution optimizes the sliding window solution by removing conditionals
    maxProfit(prices) {
        let buyingPrice = prices[0];
        let maxProfit = 0;

        for(let sellingDay = 1; sellingDay < prices.length; sellingDay++) {
            maxProfit = Math.max(maxProfit, prices[sellingDay] - buyingPrice);
            buyingPrice = Math.min(buyingPrice, prices[sellingDay]);
        }

        return maxProfit;
    }
}
