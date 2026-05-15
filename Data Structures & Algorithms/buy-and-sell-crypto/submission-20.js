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
        for(let sellingDay = 1; sellingDay < prices.length; sellingDay++){
            while(prices[sellingDay] < prices[buyingDay]) buyingDay++;
            maxProfit = Math.max(maxProfit, prices[sellingDay]-prices[buyingDay]);
        }
        return maxProfit;
    }
}
