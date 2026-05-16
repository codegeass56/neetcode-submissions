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
        let left = 0;
        let right = s.length - 1;

        while(left < right) {
            while(left < right && !this.isAlpha(s[left])) {
                left++;
            }
            while(left < right && !this.isAlpha(s[right])) {
                right--;
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }

        return true;
    }
}
