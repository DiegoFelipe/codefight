const reverseInParentheses = inputString => {
    if (inputString.match(/\([a-z]*\)/)) {
        return reverseInParentheses(inputString.replace(/\([a-z]*\)/,
            Array.from(inputString.match(/\([a-z]*\)/)[0].replace(/\(|\)/g,'')).reverse().join('')));
    }
    else return inputString;
}
