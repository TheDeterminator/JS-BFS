function Node(value) {
    this.value = value
    this.edges = []
    this.searched = false
    this.parent = null
}

Node.prototype.addEdge = function(neighbor) {
    this.edges.push(neighbor)
    // Make the link bidirectional or else make sure the neighbor is also connected
    neighbor.edges.push(this)
}
