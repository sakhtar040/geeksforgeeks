class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head) {
        this.head = head
    }

    printList() {
        let current = this.head
        let list = ""
        while(current) {
            list = list + current.data + " -> "
            current = current.next
        }

        return list + "null"
    }

    merge(leftarr, rightarr) {
        let ll = leftarr.length
        let rl = rightarr.length
        let l = 0
        let r = 0
        let res = []

        while(l < ll && r < rl) {
            if(leftarr[l] < rightarr[r]) {
                res.push(leftarr[l++])
            } else {
                res.push(rightarr[r++])
            }
        }

        return res.concat(leftarr.slice(l)).concat(rightarr.slice(r))
    }

    mergeSort(arr) {
        if(arr.length < 2) {
            return arr
        }
        let mid = Math.floor(arr.length / 2)
        return this.merge(this.mergeSort(arr.slice(0, mid)), this.mergeSort(arr.slice(mid)))
    }

    sortLL() {
        let arr = []
        let currentNode = this.head
        while(currentNode) {
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        arr = this.mergeSort(arr)

        let i=arr.length-1
        let rootNode = null
        while(i >= 0) {
            let tempNode = new Node(arr[i])
            tempNode.next = rootNode
            rootNode = tempNode
            i--
        }
        this.head = rootNode
        return this.printList()
    }
}

const ll = new Node(10)
ll.next = new Node(2)
ll.next.next = new Node(30)
ll.next.next.next = new Node(4)
ll.next.next.next.next = new Node(50)
ll.next.next.next.next.next = new Node(6)
ll.next.next.next.next.next.next = new Node(70)


const linkedList = new LinkedList(ll)
console.log(linkedList.sortLL())

