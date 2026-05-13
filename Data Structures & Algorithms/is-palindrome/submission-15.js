class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const reversedString = s.toLowerCase()
        .split('')
        .reverse()
        .map(c => /^[a-z0-9]$/.test(c)? c : null)
        .join('');

        const filteredString = s.toLowerCase()
        .split('')
        .map(c => /^[a-z0-9]$/.test(c)? c : null)
        .join('');

        return filteredString === reversedString;
    }
}
