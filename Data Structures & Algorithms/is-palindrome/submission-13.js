class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerCaseS = s.toLowerCase();
        let left = 0;
        let right = lowerCaseS.length - 1;
        while(left < right) {
            if(!(/[a-z0-9]/.test(lowerCaseS[left]))) {
                left++;
            } else if(!(/[a-z0-9]/.test(lowerCaseS[right]))) {
                right--;
            } else {
                if(lowerCaseS[left] !== lowerCaseS[right]) {
                    return false;
                }
                left++;
                right--;
            }
        }
        return true;
    }
}