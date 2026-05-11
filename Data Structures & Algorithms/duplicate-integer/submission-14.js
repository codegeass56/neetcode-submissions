class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums.length) return false;
        const set = new Set();
        for(const n of nums) {
            if(set.has(n)) return true;
            set.add(n);
        }
        return false;
    }
}
