class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();
        for(const n of nums) {
            if(map.get(n)) return true;
            map.set(n, true);
        }
        return false;
    }
}
