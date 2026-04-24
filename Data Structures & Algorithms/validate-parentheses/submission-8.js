class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0) return false;
        const stack = [];
        for(const c of s) {
            if(c === "{" || c === "[" || c === "(") {
                stack.push(c);
            } else {
                const lastOpenBracket = stack.pop();
                if(c === "}" && lastOpenBracket !== "{") return false;
                if(c === "]" && lastOpenBracket !== "[") return false;
                if(c === ")" && lastOpenBracket !== "(") return false;
            }
        }
        return stack.length === 0;
    }
}
