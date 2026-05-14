class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    //using a string builder and doing a reverse check
    //using a two-pointer solution with inner while loops

    //Note: Performing ASCII conditionals is faster than testing regex
    isAlpha(c) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9')
        );
    }

    isPalindrome(s) {
        let filteredString = '';
        for(const c of s.toLowerCase()) {
            if(this.isAlpha(c)){
                filteredString += c;
            }
        }

        return filteredString === filteredString.split('').reverse().join('');
    }
}
