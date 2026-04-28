class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let minPrice = prices[0];
        for(let i = 1; i < prices.length; i++) {
            max = Math.max(max, prices[i] - minPrice);
            minPrice = Math.min(minPrice, prices[i]);
        }
        return max;
    }
}
