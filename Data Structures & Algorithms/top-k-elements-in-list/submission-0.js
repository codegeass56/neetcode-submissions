class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(const n of nums) {
            map.set(n, (map.get(n) ?? 0) + 1);
        }
        const frequencyPairs = Array.from(map.entries());
        frequencyPairs.sort((a, b) => a[1] - b[1]);
        const res = [];
        for(let i = 0; i < k; i++) {
            const pair = frequencyPairs.pop();
            res.push(pair[0]);
        }
        return res;
    }
}
