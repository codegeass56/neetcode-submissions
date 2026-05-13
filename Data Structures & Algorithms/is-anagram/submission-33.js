class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        if(s === t) return true;

        const map = s.split('').reduce((acc, e) => {
            acc[e] = (acc[e] ?? 0) + 1;
            return acc;
        }, {});

        for(let i = 0; i < s.length; i++) {
            if(!map[t[i]]) return false;
            map[t[i]]--;
        }

        return true;
    }
}