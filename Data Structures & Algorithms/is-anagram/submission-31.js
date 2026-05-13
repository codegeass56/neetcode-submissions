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

        for(let i = 0; i < s.length; i++) {
            mapS[s[i]] = (mapS[s[i]] ?? 0) + 1;
            mapT[t[i]] = (mapT[t[i]] ?? 0) + 1;
        }

        for(const k of Object.keys(mapS)) {
            if(mapT[k] !== mapS[k]) return false;
        }

        return true;
    }
}
