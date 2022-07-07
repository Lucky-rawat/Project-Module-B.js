const bfs = function (graph, start) {
    var queue = [];
    queue.push(start);
    var visited = [];
    visited[start] = true;
    var distances = [];
    distances[start] = 0;
    while (queue.length > 0) {
        console.log("Visited nodes: " + visited);
        console.log("Distances: " + distances);
        var node = queue.shift();
        console.log("Removing node " + node + " from the queue...");
        for (var i = 1; i < graph[node].length; i++) {
            if (graph[node][i] && !visited[i]) {
                visited[i] = true;
                distances[i] = distances[node] + 1;
                queue.push(i);
                console.log("Visiting node " + i + ", setting its distance to " + distances[i] + " and adding it to the queue");

            }
        }
    }
    console.log("No more nodes in the queue. Distances: " + distances);
    return distances;
};

module.exports = {bfs};
