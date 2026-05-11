class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        if(s === t) return true;

        const map = {};

        for(const c of s) {
            map[c] = (map[c] ?? 0) + 1;
        }

        for(const c of t) {
            if(!map[c]) return false;
            map[c]--;
        }

        return true;
    }
}
