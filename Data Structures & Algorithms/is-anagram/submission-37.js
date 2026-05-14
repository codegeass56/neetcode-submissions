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
        const mapT = {};

        for(let i = 0; i < s.length; i++) {
            mapS[s[i]] = (mapS[s[i]] ?? 0) + 1;
            mapT[t[i]] = (mapT[t[i]] ?? 0) + 1;
        }

        for(const k in mapS) {
            if(mapT[k] !== mapS[k]) return false;
        }

        return true;
    }
}
