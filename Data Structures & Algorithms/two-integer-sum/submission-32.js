class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //hashmap two pass
    //hashmap single pass
    //using sorting with an array of pairs
    twoSum(nums, target) {
        const arr = [];

        for(let i = 0; i < nums.length; i++) {
            arr.push([nums[i], i]);
        }

        arr.sort((a, b) => a[0] - b[0]);

        let left = 0;
        let right = arr.length - 1;

        while(left < right) {
            const sum = arr[left][0] + arr[right][0];
            if(sum > target) {
                right--;
            } else if(sum < target) {
                left++;
            } else {
                return [
                    Math.min(arr[left][1], arr[right][1]),
                    Math.max(arr[left][1], arr[right][1])
                ];
            }
        }

        return [];
    }
}
