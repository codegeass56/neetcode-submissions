class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let filteredStr = ""
        for(const c of s.toLowerCase()) {
            if(/^[0-9a-z]$/.test(c)) {
                filteredStr += c;
            }
        }

        return filteredStr === filteredStr.split('').reverse().join('');
    }
}
