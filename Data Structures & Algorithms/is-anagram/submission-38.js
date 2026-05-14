class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s === t) return true;
        if(s.length !== t.length) return false;

        const mapS = {};

        for(const c of s) {
            mapS[c] = (mapS[c] ?? 0) + 1;
        }

        for(const c of t) {
            if(!mapS[c]) return false;
            mapS[c]--;
        }

        return true;
    }
}
