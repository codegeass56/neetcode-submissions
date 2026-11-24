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
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(map.has(diff) && map.get(diff) !== i) {
                return [map.get(diff), i];
            }
        }
        return [];
    }
}
