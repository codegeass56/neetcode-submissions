class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    //sliding window using two pointers
    //dp solution optimizes the sliding window solution by removing conditionals
    maxProfit(prices) {
        let maxProfit = 0;
        let buyingPrice = prices[0];
        let sellingDay = 1;

        while(sellingDay < prices.length) {
            if(buyingPrice > prices[sellingDay]) {
                buyingPrice = prices[sellingDay];
            }
            maxProfit = Math.max(maxProfit, prices[sellingDay] - buyingPrice);
            sellingDay++;
        }

        return maxProfit;
    }
}
