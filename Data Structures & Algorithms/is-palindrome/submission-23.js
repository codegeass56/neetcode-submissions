class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //using a string builder and doing a reverse check
    //using a two-pointer solution with inner while loops

    //Note: Performing ASCII conditionals is faster than testing regex
    isPalindrome(s) {
        let filteredString = '';
        for(const c of s.toLowerCase()) {
            if(/^[a-z0-9]$/.test(c)){
                filteredString += c;
            }
        }

        return filteredString === filteredString.split('').reverse().join('');
    }
}
