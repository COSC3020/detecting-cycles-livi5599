function hasCycle(graph) {
    let queue = [];
    let visited = [];
    let current = 0;
    let parent = null;
    visited.push(current);
    queue.push(current);

    while (queue.length != 0) {
        current = queue.shift();
        for (let neighbor = 0; neighbor < graph[current].length; neighbor++) {
            if (graph[current][neighbor] === 0) {
                continue;
            }
            else if (neighbor === parent) {
                continue;
            }
            else if (visited.includes(neighbor)) {
                return true;
            }
            else {
                visited.push(neighbor);
                queue.push(neighbor);
            }
        }
        parent = current;
    }
    return false;
}
