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
        const map = {};
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(map[diff] !== undefined) return [map[diff], i];
            map[nums[i]] = i;
        }

        return [];
    }
}
