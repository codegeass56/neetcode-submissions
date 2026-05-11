class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const A = [];
        for(let i = 0; i < nums.length; i++) {
            A.push([nums[i], i]);
        }
        A.sort((a, b) => a[0] - b[0]);
        let left = 0;
        let right = A.length - 1;
        while(left < right) {
            if(A[left][0] + A[right][0] > target) {
                right--;
            } else if(A[left][0] + A[right][0] < target) {
                left++;
            } else {
                return [Math.min(A[left][1], A[right][1]), Math.max(A[left][1], A[right][1])];
            }
        }
        return [];
    }
}
