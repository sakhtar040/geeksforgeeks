class LRU_Hash {
    constructor(cacheLimit) {
        this.cacheLimit = cacheLimit
        this.pageHit = 0
        this.pageMiss = 0
        this.hash = {}
    }

    getPageHit() {
        return this.pageHit
    }

    getPageMiss() {
        return this.pageMiss
    }

    getCache() {
        return this.hash
    }

    getLength() {
        return Object.keys(this.hash).length
    }

    addValue(value) {
        if(Object.keys(this.hash).length === 0) {
            this.pageMiss++
            this.hash[value] = 0
        } else {
            if(this.getLength() < this.cacheLimit) {
                if(this.hash.hasOwnProperty(value)) {
                    this.pageHit++
                    let val = this.hash[value]
                    this.hash[value] = undefined
                    this.hash[value] = val++
                } else {
                    this.pageMiss++
                    this.hash[value] = 0
                }
            } else {
                if(this.hash.hasOwnProperty(value)) {
                    this.pageHit++
                    let val = this.hash[value]
                    this.hash[value] = undefined
                    this.hash[value] = val++
                } else {
                    this.pageMiss++
                    let sortable = [];
                    for (let item in this.hash) {
                        sortable.push([item, this.hash[item]]);
                    }
                    sortable.sort(function(a, b) {
                        return a[1] - b[1];
                    });
                    delete this.hash[sortable[0][0]]
                    this.hash[value] = 0
                }
            }
        }
    }
}

const lru = new LRU_Hash(3)
lru.addValue(1);
lru.addValue(2);
lru.addValue(3);
lru.addValue(4);
lru.addValue(2);
lru.addValue(1);
lru.addValue(4);
lru.addValue(5);
lru.addValue(2);

console.log(lru.getCache())
console.log(lru.getPageHit())
console.log(lru.getPageMiss())