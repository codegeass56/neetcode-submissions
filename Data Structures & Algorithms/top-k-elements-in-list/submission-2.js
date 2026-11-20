class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    //0, 1, 2, 3, 4
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
        for(const n of nums) {
            frequencyMap.set(n, (frequencyMap.get(n) ?? 0) + 1);
        }

        const frequencyList = Array.from({ length: nums.length + 1 }, () => []);
        for(const [n, frequency] of frequencyMap.entries()) {
            frequencyList[frequency].push(n);
        }
        const res = [];
        for(let i = frequencyList.length - 1; i >= 0; i--) {
            for(const n of frequencyList[i]) {
                if(res.length === k) return res;
                res.push(n);
            }
        }

        return res;
    }
}
