class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(prices.length === 1) return 0;
        let max = 0;
        let l = 0;
        for(let r = 1; r < prices.length; r++) {
            if(prices[r] > prices[l]) {
                let currProfit = prices[r] - prices[l];
                max = currProfit > max ? currProfit : max;
            } else {
                l = r;
            }
        }
        return max;
    }
}
