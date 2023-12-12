const wordLadder = (beginWord, endWord, wordList) => {
    let count = 1

    if(!wordList.includes(endWord)) {
        return 0
    }

    if(beginWord === endWord) {
        return 0
    }

    let wordSet = new Set(wordList)

    let queue = [beginWord]

    while(queue.length) {
        let n = queue.length
        for(let i=0; i<n; i++) {
            let word = queue.shift()
            if(word === endWord) {
                return count
            }
            for(let j=0; j<word.length; j++) {
                for(let k=0; k<26; k++) {
                    let newWord = word.slice(0, j) + String.fromCharCode(k + 97) + word.slice(j+1)
                    if(wordSet.has(newWord)) {
                        queue.push(newWord)
                        wordSet.delete(newWord)
                    }
                }
            }
        }
        count++
    }

    return 0
}

const start = "hit"
const end = "cog"
const dict = ["hot","dot","dog","lot","log","cog"]

console.log(wordLadder(start, end, dict))