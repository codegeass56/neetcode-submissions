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
                let currProfit = r - l;
                max = currProfit > max ? currProfit : max;
            } else {
                l = r;
            }
        }
        return max;
    }
}
