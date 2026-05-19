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
        if(s === t) return true;
        if(s.length !== t.length) return false;

        const map = new Map();

        for(const c of s) {
            map.set(c, (map.get(c) || 0) + 1);
        }

        for(const c of t) {
            if(!map.get(c)) return false;
            map.set(c, map.get(c) - 1);
        }

        return true;
    }
}
