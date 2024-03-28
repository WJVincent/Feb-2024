/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
	let q = [];
	const visited = new Set();
	if(start !== undefined){
		q.push(start);
		visited.add(start);
	}
	// const visited = new Set(q);

	while(q.length){
		//1. get the node
		const node = q.shift();

		//2. do the thing
		if(node === end) return true;

		//3. find and add neighbors
		adjList[node].forEach(el => {
			if(!visited.has(el)){
				visited.add(el);
				q.push(el);
			}
		});
	};

	return false;
}

// console.log(breadthFirstSearch(1, 3)); // -> true
// console.log(breadthFirstSearch(4, 1)); // -> true
// console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
