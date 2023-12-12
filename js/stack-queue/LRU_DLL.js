class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class LRU_DLL {
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
            return 0
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
                if(this.isNodePresent(data)) {
                    this.pageHit++
                    if(this.head.next) {
                        let current = this.head
                        while(current) {
                            if(current.data === data) {
                                break
                            }
                            current = current.next
                        }
                        if(this.head.data === current.data) {
                            this.head = this.head.next
                            this.head.prev = null
                        } else {
                            current.prev.next = current.next
                        }
                        current = this.head
                        while(current.next) {
                            current = current.next
                        }
                        let newNode = new Node(data)
                        current.next = newNode
                        newNode.prev = current
                    }
                } else {
                    this.pageMiss++
                    let current = this.head
                    while(current.next) {
                        current = current.next
                    }
                    let newNode = new Node(data)
                    current.next = newNode
                    newNode.prev = current
                }
            } else {
                if(this.isNodePresent(data)) {
                    this.pageHit++
                    let current = this.head
                    while(current) {
                        if(current.data === data) {
                            break
                        }
                        current = current.next
                    }
                    if(this.head.data === current.data) {
                        this.head = this.head.next
                        this.head.prev = null
                    } else {
                        current.prev.next = current.next
                    }
                    current = this.head
                    while(current.next) {
                        current = current.next
                    }
                    let newNode = new Node(data)
                    current.next = newNode
                    newNode.prev = current
                } else {
                    this.pageMiss++
                    this.head = this.head.next
                    this.head.prev = null
                    let current = this.head
                    while(current.next) {
                        current = current.next
                    }
                    let newNode = new Node(data)
                    current.next = newNode
                    newNode.prev = current
                }
            }
        }
    }

}

const lru = new LRU_DLL(3)
lru.addNode(1);
lru.addNode(2);
lru.addNode(3);
lru.addNode(4);
lru.addNode(2);
lru.addNode(1);
lru.addNode(4);
lru.addNode(5);
lru.addNode(2);

console.log(lru.getCache())
console.log(lru.getPageHit())
console.log(lru.getPageMiss())
