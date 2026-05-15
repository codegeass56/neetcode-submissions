class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //sliding window using two pointers
    //dp solution optimizes the sliding window solution by removing conditionals
    maxProfit(prices) {
        let buyingDay = 0;
        let sellingDay = 1;
        let maxProfit = 0;

        while(sellingDay < prices.length) {
            while(prices[sellingDay] < prices[buyingDay]) {
                buyingDay++;
            }
            maxProfit = Math.max(maxProfit, prices[sellingDay] - prices[buyingDay]);
            sellingDay++;
        }

        return maxProfit;
    }
}
