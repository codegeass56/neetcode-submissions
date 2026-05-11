class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums.length) return false;
        return new Set(nums).size < nums.length;
    }
}
