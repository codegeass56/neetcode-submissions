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

        for(const sellingPrice of prices) {
            maxProfit = Math.max(maxProfit, sellingPrice - buyingPrice);
            buyingPrice = Math.min(buyingPrice, sellingPrice);
        }

        return maxProfit;
    }
}
