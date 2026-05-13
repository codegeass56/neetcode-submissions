class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //edge cases
    //s = "racecar" t = "raceccccar"
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        if(s === t) return true;

        const map = {};

        for(let i = 0; i < s.length; i++) {
            map[s[i]] = (map[s[i]] ?? 0) + 1;
        }

        for(let i = 0; i < s.length; i++) {
            if(!map[t[i]]) return false;
            map[t[i]]--;
        }

        return true;
    }
}