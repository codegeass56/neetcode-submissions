class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //hashmap two pass 
    //(know why to check same index and return [i, map[nums[i]]])
    
    //hashmap single pass 
    //(know why no check is required for same index and return [map[nums[i]], i])
    
    //using sorting with an array of pairs
    //(know why explicit check is required to find the min and max indices)
    twoSum(nums, target) {
        const pairs = [];

        for(let i = 0; i < nums.length; i++) {
            pairs.push([nums[i], i]);
        }

        pairs.sort((a, b) => a[0] - b[0]);

        let left = 0;
        let right = pairs.length - 1;

        while(left < right) {
            const sum = pairs[left][0] + pairs[right][0];
            if(sum === target) {
                return [Math.min(pairs[left][1], pairs[right][1]), 
                Math.max(pairs[left][1], pairs[right][1])];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return [];
    }
}
