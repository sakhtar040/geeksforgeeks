class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    linkDelete(M,N) {
        let currentNode = this.head
        let count = 0
        while(currentNode) {
            count++
            if(count === M && N > 0) {
                let tempNode = currentNode
                let tempCount = 0
                while(tempNode) {
                    tempCount++
                    tempNode = tempNode.next
                    if(tempCount === N) {
                        tempNode = tempNode?.next || null
                        break
                    }
                }
                currentNode.next = tempNode
                count = 0
            }
            currentNode = currentNode.next
        }
    }

    print() {
        let currentNode = this.head
        let ll = []
        while(currentNode) {
            ll.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(ll);
    }
}

//9 1 3 5 9 4 10 1
const node = new Node(8)
node.next = new Node(4)
node.next.next = new Node(8)
node.next.next.next = new Node(10)
node.next.next.next.next = new Node(1)
node.next.next.next.next.next = new Node(3)
// node.next.next.next.next.next.next = new Node(10)
// node.next.next.next.next.next.next.next = new Node(1)

const ll = new LinkedList(node)
ll.linkDelete(1, 0)
ll.print()