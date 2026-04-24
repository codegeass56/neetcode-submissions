class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0) return false;
        let i = 0;
        const stack = [];
        while(i < s.length) {
            if(s[i] === "{" || s[i] === "[" || s[i] === "(") {
                stack.push(s[i]);
            } else {
                const lastOpenBracket = stack.pop();
                if(s[i] === "}" && lastOpenBracket !== "{") return false;
                if(s[i] === "]" && lastOpenBracket !== "[") return false;
                if(s[i] === ")" && lastOpenBracket !== "(") return false;
            }
            i++;
        }
        return stack.length === 0;
    }
}
