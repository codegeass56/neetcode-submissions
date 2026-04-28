class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = prices[0];
        for(let r of prices) {
            max = Math.max(max, r - l);
            l = Math.min(l, r);
        }
        return max;
    }
}
