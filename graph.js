function Graph() {
    this.nodes = []
    this.graph = {}
    this.start = null
    this.end = null
}

Graph.prototype.reset = function() {
    for (var i = 0; i < this.nodes.length; i++)
    {
	this.nodes[i].searched = false
	this.nodes[i].parent = null
    }
}

Graph.prototype.setStart = function(actor) {
    this.start = this.graph[actor]
    return this.start
}

Graph.prototype.setEnd = function(actor) {
    this.end = this.graph[actor]
    return this.end
}

Graph.prototype.addNode = function(node) {
    // Push the node into the queue and grab the title
    this.nodes.push(node)
    var title = node.value // Index into our hash table 
    // Push the node into "hash" table
    this.graph[title] = node
}

Graph.prototype.getNode = function(actor) {
    var node = this.graph[actor]
    return node
}
