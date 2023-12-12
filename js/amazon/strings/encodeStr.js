const encodeStr = (str) => {
    let count = 1
    let encodedStr = ""
    for(let i=0; i<str.length; i++) {
        if(str[i] === str[i+1]) {
            count++
        } else {
            encodedStr += str[i] + count
            count = 1
        }
    }

    return encodedStr
}

console.log(encodeStr("hnwnkuewhsqmgbbuqcljjivswmdkqtbxixmvtrrbljptnsnfwzqfjmafadrrwsofsbcnuvqhffbsaqxwpqcac"))