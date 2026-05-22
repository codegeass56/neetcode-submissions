class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //sliding window using two pointers
    //dp solution optimizes the sliding window solution by removing conditionals
    maxProfit(prices) {
        let minBuyingPrice = prices[0];
        let profit = 0;

        for(let sellingDay = 1; sellingDay < prices.length; sellingDay++) {
            profit = Math.max(profit, prices[sellingDay] - minBuyingPrice);
            minBuyingPrice = Math.min(minBuyingPrice, prices[sellingDay]);
        }
        
        return profit;
    }
}
