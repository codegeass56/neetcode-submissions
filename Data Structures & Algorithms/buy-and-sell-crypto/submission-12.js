class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyingDay = 0;
        let sellingDay = 1;
        let maxProfit = 0;

        while(sellingDay < prices.length) {
            if(prices[buyingDay] < prices[sellingDay]) {
                const profit = prices[sellingDay] - prices[buyingDay];
                maxProfit = Math.max(profit, maxProfit);
            } else {
                buyingDay = sellingDay;
            }
            sellingDay++;
        }

        return maxProfit;
    }
}
