function knightMoves(start, end) {
    if (validPosition(start) && validPosition(end)) {
        const moves = [[2, 1], [2, -1], [-2, 1], [-2, -1],
                        [1, 2], [1, -2], [-1, 2], [-1, -2]];

        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if (x === end[0] && y === end[1]) {
                return path;
            }

            for (const [dx, dy] of moves) {
                const newPos = [x + dx, y + dy];
                const key = newPos.toString();

                if (validPosition(newPos) && !visited.has(key)) {
                    visited.add(key);

                    if (newPos[0] === end [0] && newPos[1] === end[1]) {
                        return [...path, newPos];
                    } 

                    queue.push([...path, newPos]);
                }
            }
        }

        return [];
    }
}

function validPosition(pos) {
    if ((pos[0] >= 0 && pos[0] <= 7) && (pos[1] >= 0 && pos[1] <= 7)) {
        return true;
    }
    return false;
}

console.log(knightMoves([0,0],[1,2])); 
console.log(knightMoves([0,0],[3,3])); 
console.log(knightMoves([3,3],[0,0])); 
console.log(knightMoves([0,0],[7,7])); 