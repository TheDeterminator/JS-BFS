var data
var graph
var dropdown

function preload() {
    data = loadJSON("kevinbacon.json")
}

function setup() {
    graph = new Graph()
    dropdown = createSelect()
    dropdown.changed(bfs)
    noCanvas()

    var movies = data.movies

    for (let i = 0; i < movies.length; i++)
    {
	var movie = movies[i].title
	var cast = movies[i].cast
	var movieNode = new Node(movie)
	graph.addNode(movieNode)

	for (let j = 0; j < cast.length; j++)
	{
	    var actor = cast[j]
	    var actorNode = graph.getNode(actor)
	    if (actorNode == undefined)
	   {	
	     actorNode = new Node(actor)
	     dropdown.option(actor)
	    }
	    graph.addNode(actorNode)
	    movieNode.addEdge(actorNode)
	}
    }
}

function bfs() {
    graph.reset()
    // Chose where to start your BFS
    var start = graph.setStart(dropdown.value())
    // Choose where to end your BFS, the value to find
    var end = graph.setEnd('Kevin Bacon') // Will fail if not put in exactly right

    console.log(graph)
    console.log('something?')
    var queue = [] // Use a queue to hold nodes in a bfs
    start.searched = true
    queue.push(start)

    while (queue.length > 0)
    {
	var current = queue.shift()
	if (current == end)
	{
	    console.log("Found " + current.value)
	    break
	}
	var edges = current.edges
	for (let i = 0; i < edges.length; i++)
	{
	    var neighbor = edges[i]
	    if (!neighbor.searched)
	    {
		neighbor.searched = true
		neighbor.parent = current
		queue.push(neighbor)
	    }
	}
    }

    var path = []
    path.push(end)
    var next = end.parent
    while (next != null)
    {
	path.push(next)
	next = next.parent
    }

    var txt = ''
    for (let i = path.length -1; i >= 0; i--)
    {
	var n = path[i]
	txt += n.value
	if (i != 0)
	{
	    txt += '--> '
	}
    }
    createP(txt)
}
