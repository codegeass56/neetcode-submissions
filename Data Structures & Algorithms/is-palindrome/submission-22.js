class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlpha(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
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
