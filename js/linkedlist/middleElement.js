const middleElement = () => {
    let currentNode = this.head
    let fastNode = this.head

    while(fastNode && fastNode.next) {
        currentNode = currentNode.next
        fastNode = fastNode.next.next
    }
    return currentNode.data
}