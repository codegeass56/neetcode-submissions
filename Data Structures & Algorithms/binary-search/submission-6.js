class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target, left = 0, right = nums.length - 1) {
        if(left > right) return -1;
        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target) return mid;
        return nums[mid] < target ? 
        this.search(nums, target, mid + 1, right) :
        this.search(nums, target, left, mid - 1);
    }
}
