class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;
        while(left < right) {
            if(!(/[a-z0-9]/.test(s[left]))) {
                left++;
            } else if(!(/[a-z0-9]/.test(s[right]))) {
                right--;
            } else {
                if(s[left] !== s[right]) return false;
                left++;
                right--;
            }
        }
        return true;
    }
}