class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //[5, 6, 4] t: 10
    //
    //{5: 0, 6: 1,  }
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
