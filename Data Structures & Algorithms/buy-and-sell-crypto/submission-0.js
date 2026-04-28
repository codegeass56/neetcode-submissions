class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0;
        let max = 0;
        for(let i = 0; i < prices.length; i++) {
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[j] > prices[i]) {
                    let currProfit = prices[j] - prices[i];
                    max = currProfit > max ? currProfit : max;
                }
            }
        }
        return max;
    }
}
