const minCostConnectPoints1 = function(points) {
    const getDistance = (xi, yi, xj, yj) => Math.abs(xi - xj) + Math.abs(yi - yj);

    // Built in PriorityQueue library
    let mpq = new MinPriorityQueue({compare: (a, b) => a[1] - b[1]});
    mpq.enqueue([0, 0]);

    let totalCost = 0, visited = new Set();
    while (visited.size < points.length) {
        let [i, cost] = mpq.dequeue();
        if (visited.has(i)) continue;
        visited.add(i);
        totalCost += cost;
        let [xi, yi] = points[i];
        for (let j = 0; j < points.length; j++) {
            if (!visited.has(j)) {
                let [xj, yj] = points[j];
                mpq.enqueue([j, getDistance(xi, yi, xj, yj)]);
            };
        }
    }
    return totalCost;
};

const minCostConnectPoints = function(points) {
    let cost = 0;
    const n = points.length;
    const dist = Array(n).fill(Infinity);
    dist[0] = 0;
    let next = 0;

    for (let step = 1; step < n; step++) {
        let min = Infinity;
        let point = -1;
        for (let i = 1; i < n; i++) {
            if (dist[i] > 0) {
                dist[i] = Math.min(dist[i], Math.abs(points[i][0] - points[next][0]) + Math.abs(points[i][1] - points[next][1]));
                if (dist[i] < min) {
                    min = dist[i];
                    point = i;
                }
            }
        }
        cost += min;
        dist[point] = 0;
        next = point;
    }

    return cost;
};

console.log(minCostConnectPoints([[0,0],[2,2],[3,10],[5,2],[7,0]]))