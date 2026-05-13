class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        if(s === t) return true;

        const sSort = s.split('').sort().join('');
        const tSort = t.split('').sort().join('');
        return sSort === tSort;
    }
}