// https://leetcode.com/problems/campus-bikes/
// NOT AN OPTIMAL SOLUTION
var assignBikes = function (workers, bikes) {
  // add [distance, position of worker, position of bike] to the pq
  const pq = [];
  for (const worker of workers) {
    for (const bike of bikes) {
      const distance = getDistance(worker, bike);
      pq.push([distance, workers.indexOf(worker), bikes.indexOf(bike)]);
    }
  }

  // sort the damn pq, according to distance, fallback to worker position
  pq.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[2] - b[2];
  });

  // start res and keep filling with smallest distance first
  const result = new Array(workers.length).fill(null);
  const used = new Set();
  for (let i = 0; i < pq.length; i++) {
    if (used.size === workers.length) break;
    const [_, w, b] = pq[i];
    if (used.has(b) || result[w] !== null) continue;
    result[w] = b;
    used.add(b);
  }
  return result;
};

const getDistance = (worker, bike) => Math.abs(worker[0] - bike[0]) + Math.abs(worker[1] - bike[1]);
