class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while(left < right) {
            let leftChar = s[left].toLowerCase();
            let rightChar = s[right].toLowerCase();

            if(!(/^[a-z0-9]$/.test(leftChar))){
                left++;
            } else if(!(/^[a-z0-9]$/.test(rightChar))){
                right--;
            } else if(leftChar !== rightChar){
                return false;
            } else {
                left++;
                right--;
            }
        }

        return true;
       
    }
}
