class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuyingPrice = prices[0];
        let maxProfit = 0;

        for(const p of prices) {
            maxProfit = Math.max(maxProfit, p - minBuyingPrice);
            minBuyingPrice = Math.min(minBuyingPrice, p);
        }

        return maxProfit;
    }
}
