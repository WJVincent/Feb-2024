function getNeighbors(row, col, graph) {
    const res = [];
    
    if(graph[row - 1] && graph[row - 1][col]) res.push([row - 1, col]);
    if(graph[row + 1] && graph[row + 1][col]) res.push([row + 1, col]);
    if(graph[row] && graph[row][col - 1]) res.push([row, col - 1]);
    if(graph[row] && graph[row][col + 1]) res.push([row, col + 1]);

    return res;
}


function islandSize(row, col, graph) {
    const q = [[row, col]];
    const v = new Set().add(`${row},${col}`);
    let size = 0;

    while(q.length){
        //1. get the node
        const currNode = q.shift();

        //2. do the thing
        size++;

        //3. traverse
        const neighbors = getNeighbors(currNode[0], currNode[1], graph);
        neighbors.forEach(el => {
            const elStr = `${el[0]},${el[1]}`;
            if(!v.has(elStr)){
                v.add(elStr);
                q.push(el);
            };
        });
    };

    return size;
}

module.exports = [getNeighbors, islandSize];
