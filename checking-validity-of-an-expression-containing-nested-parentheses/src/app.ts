function valid(expression: string): boolean {
    const stack = [];

    for (const char of expression) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0) {
                return false;
            }

            const poppedChar = stack.pop();

            if (matchParentheses(char, poppedChar)) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}

function matchParentheses(char: string, poppedChar: string): boolean {
    if (char === ')' && poppedChar !== '(') {
        return true;
    } else if (char === '}' && poppedChar !== '{') {
        return true;
    } else if (char === ']' && poppedChar !== '[') {
        return true;
    }

    return false;
}

console.log(`( 1 + 2 ) - 5 * [ a - b ] -> ${valid('( 1 + 2 ) - 5 * [ a - b ]')}`);
console.log(`( 1 + 2  - 5 * [ a - b ] -> ${valid('( 1 + 2  - 5 * [ a - b ]')}`);
