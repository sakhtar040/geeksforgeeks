class LRU_Queue {
    constructor(cacheLimit) {
        this.cacheLimit = cacheLimit
        this.pageMiss = 0
        this.pageHit = 0
        this.cache = []
    }

    getPageMiss() {
        return this.pageMiss
    }

    getPageHit() {
        return this.pageHit
    }

    getCache() {
        return this.cache
    }

    addItem(value) {
        if(this.cache === [] || this.cacheLimit !== this.cache.length) {
            this.pageMiss++
            this.cache.push(value)
        } else {
            if(this.cache.includes(value)) {
                this.pageHit++
                let valueHit = this.cache.shift()
                this.cache.push(valueHit)
            } else {
                this.pageMiss++
                this.cache.shift()
                this.cache.push(value)
            }
        }
    }
}

const lru = new LRU_Queue(3)
lru.addItem(1)
lru.addItem(2)
lru.addItem(3)
lru.addItem(4)
lru.addItem(2)
lru.addItem(1)
lru.addItem(4)
lru.addItem(5)
lru.addItem(2)

console.log(lru.getCache())
console.log(lru.getPageHit())
console.log(lru.getPageMiss())