class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LRU_LL {
    constructor(cacheLimit) {
        this.cacheLimit = cacheLimit
        this.pageHit = 0
        this.pageMiss = 0
        this.head = null
    }

    getPageHit() {
        return this.pageHit
    }

    getPageMiss() {
        return this.pageMiss
    }

    getCache() {
        if(this.head === null) {
            return null
        } else {
            let currentNode = this.head
            let ll = ""
            while(currentNode) {
                ll = ll + currentNode.data + " -> "
                currentNode = currentNode.next
            }
            return ll
        }
    }

    isNodePresent(data) {
        let currentNode = this.head
        while(currentNode) {
            if(currentNode.data === data) {
                return true
            }
            currentNode = currentNode.next
        }
        return false
    }

    getLength() {
        if(this.head === null) {
            this.length = 0
            return this.length
        } else {
            let currentNode = this.head
            let length = 0
            while(currentNode) {
                length++
                currentNode = currentNode.next
            }
            return length
        }
    }

    addNode(data) {
        if(this.head === null) {
            this.pageMiss++
            this.head = new Node(data)
        } else {
            if(this.getLength() < this.cacheLimit) {
                if(!this.isNodePresent(data)) {
                    let currentNode = this.head
                    while(currentNode.next) {
                        currentNode = currentNode.next
                    }
                    currentNode.next = new Node(data)
                    this.pageMiss++
                } else {
                    if(this.head.next === null && this.head.data === data) {
                        this.pageHit++
                    } else if(this.head.next && this.head.data === data) {
                        this.pageHit++
                        this.head = this.head.next
                        let currentNode = this.head
                        while(currentNode.next) {
                            currentNode = currentNode.next
                        }
                        currentNode.next = new Node(data)
                    } else {
                        this.pageHit++
                        let prevNode = null
                        let currentNode = this.head
                        while(currentNode) {
                            if(currentNode.data === data) {
                                break
                            }
                            prevNode = currentNode
                            currentNode = currentNode.next
                        }
                        if(currentNode.next === null) {
                            prevNode.next = new Node(data)
                            return
                        }
                        prevNode.next = currentNode.next.next
                        currentNode = this.head
                        while(currentNode.next) {
                            currentNode = currentNode.next
                        }
                        currentNode.next = new Node(data)
                    }
                }
            } else {
                if(this.isNodePresent(data)) {
                    this.pageHit++
                    let prevNode = null
                    let currentNode = this.head
                    while(currentNode) {
                        if(currentNode.data === data) {
                            break
                        }
                        prevNode = currentNode
                        currentNode = currentNode.next
                    }
                    if(prevNode) {
                        prevNode.next = currentNode.next.next
                    } else{
                        this.head = this.head.next
                    }
                    currentNode = this.head
                    while(currentNode.next) {
                        currentNode = currentNode.next
                    }
                    currentNode.next = new Node(data)
                } else {
                    this.pageMiss++
                    this.head = this.head.next
                    let currentNode = this.head
                    while(currentNode.next) {
                        currentNode = currentNode.next
                    }
                    currentNode.next = new Node(data)
                }
            }
        }
    }
}

const lru = new LRU_LL(3)
lru.addNode(1)
lru.addNode(1)
lru.addNode(2)
lru.addNode(2)
lru.addNode(3)
lru.addNode(1)
lru.addNode(2)
lru.addNode(3)
lru.addNode(4)

console.log(lru.getCache())
console.log(lru.getPageHit())
console.log(lru.getPageMiss())
