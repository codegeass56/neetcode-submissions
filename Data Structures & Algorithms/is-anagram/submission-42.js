class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //sorting
    //hashMap with two maps or one map
    //using array as a hashtable
    isAnagram(s, t) {
        return s.split('').sort().join() === t.split('').sort().join();
    }
}
