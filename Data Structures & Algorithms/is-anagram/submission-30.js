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

        const mapS = {};
        const mapT = {};

        for(const c of s) {
            mapS[c] = (mapS[c] ?? 0) + 1;
        }

        for(const c of t) {
            mapT[c] = (mapT[c] ?? 0) + 1;
        }

        for(const k of Object.keys(mapS)) {
            if(mapT[k] !== mapS[k]) return false;
        }

        return true;
    }
}
