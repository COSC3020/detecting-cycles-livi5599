function hasCycle(graph) {
    let queue = [];
    let visited = [];
    let current = graph[0];
    let parent = null;
    visited.push(current);
    queue.push(current);
    while (queue.length != 0) {
        current = queue.shift();
        for (let neighbor = 0; neighbor < current.length; neighbor++) {
            if (current[neighbor] == 0) {
                continue;
            }
            else if (graph[current[neighbor]] == parent) {
                continue;
            }
            else if (visited.includes(graph[current[neighbor]])) {
                return true;
            }
            else {
                visited.push(graph[current[neighbor]]);
                queue.push(graph[current[neighbor]]);
            }
        }
        parent = current;
    }
    return false;
}
