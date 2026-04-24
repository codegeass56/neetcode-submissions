class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 !== 0) return false;
        const stack = [];

        for(const c of s) {
            switch(c) {
                case '(':
                case '{':
                case '[': stack.push(c); continue;
                case '}': 
                    if(stack.pop() !== "{") 
                        return false; 
                    continue;
                case ']': 
                    if(stack.pop() !== "[") 
                        return false; 
                    continue;
                case ')': 
                    if(stack.pop() !== "(") 
                        return false; 
                    continue;
                default: 
                    continue;
            }
        }
        return stack.length === 0;
    }
}
