class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let l = prices[0];
        for(let r of prices) {
            if(r > l) {
                max = Math.max(max, r - l);
            } else {
                l = r;
            }
        }
        return max;
    }
}
