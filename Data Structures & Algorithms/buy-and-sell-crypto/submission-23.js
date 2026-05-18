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
            while(prices[sellingDay] < buyingPrice && sellingDay < prices.length - 1) {
                buyingPrice = prices[sellingDay];
                sellingDay++;
            }
            maxProfit = Math.max(maxProfit, prices[sellingDay] - buyingPrice);
            sellingDay++;
        }

        return maxProfit;
    }
}
