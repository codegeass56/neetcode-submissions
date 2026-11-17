class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for(const word of strs) {
            const counts = new Array(26).fill(0);
            for(const c of word) {
                counts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = counts.join(',');
            if(!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(word);
        }
        return Array.from(map.values());
    }
}
