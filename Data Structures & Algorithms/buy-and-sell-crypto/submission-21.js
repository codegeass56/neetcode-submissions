class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //sliding window using two pointers
    //dp solution optimizes the sliding window solution by removing conditionals
    maxProfit(prices) {
        let maxProfit = 0;
        let buyingDay = 0;
        let sellingDay = 1;

        while(sellingDay < prices.length) {
            if(prices[buyingDay] < prices[sellingDay]) {
                maxProfit = Math.max(maxProfit, prices[sellingDay] - prices[buyingDay]);
            } else {
                buyingDay = sellingDay;
            }
            sellingDay++;
        }

        return maxProfit;
    }
}
