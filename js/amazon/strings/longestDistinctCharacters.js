const longestDistinctCharacters = (s) => {
    if(s.length === 1) {
        return 1;
    }
    const charIndexMap = new Map(); // Map to store characters and their last seen indices
    let maxLength = 0; // Maximum length of distinct substring
    let start = 0; // Start index of the current substring
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap.has(char)) {
            start = Math.max(start, charIndexMap.get(char) + 1); // Move start to the next index after the repeated character
        }
        maxLength = Math.max(maxLength, end - start + 1); // Update maxLength
        charIndexMap.set(char, end); // Update the last seen index of the character
    }
    return maxLength;
}

console.log(longestDistinctCharacters("geeksforgeeks"))