
class Graph {

	constructor () {
		this.nodes = {};
	}
	
	addNode (node) {
		this.nodes[node] = [];
	}
	
	showNodes () {
		console.log(this.nodes);
	}
	
	addEdge(src, des) {

		if(!this.nodes[src] || !this.nodes[des]) {
			console.log("Source or destination not found");
			return;
		}
		
		if(!this.nodes[src].includes(des)) {
			this.nodes[src].push(des);
		}
		
		if(!this.nodes[des].includes(src)) {
		    this.nodes[des].push(src);
		}
	}
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);

graph.addEdge(1,5);
graph.addEdge(1,2);
graph.addEdge(1,4);
graph.addEdge(2,3);
graph.addEdge(3,5);
graph.addEdge(3,6);
graph.addEdge(4,5);
graph.addEdge(6,5);

graph.showNodes();
