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
        let profit = 0;

        while(sellingDay < prices.length) {
            if(prices[buyingDay] < prices[sellingDay]){
                profit = Math.max(profit, prices[sellingDay] - prices[buyingDay]);
            } else{
                buyingDay = sellingDay;
            }
            sellingDay++;
        }

        return profit;
    }
}
