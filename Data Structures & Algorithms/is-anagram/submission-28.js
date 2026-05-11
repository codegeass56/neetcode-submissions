class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        if(s === t) return true;

        const map = s.split('').reduce((acc, c) => {
            acc[c] = (acc[c] ?? 0) + 1;
            return acc;
        }, {});

        for(const c of t) {
            if(!map[c]) return false;
            map[c]--;
        }

        return true;
    }
}
