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

        for(const sellingPrice of prices) {
            profit = Math.max(profit, sellingPrice - minBuyingPrice);
            minBuyingPrice = Math.min(minBuyingPrice, sellingPrice);
        }
        
        return profit;
    }
}
