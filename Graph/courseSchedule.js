/**
 * https://leetcode.com/problems/course-schedule
 * It will be lot easier if you first draw this problem.
 */
var canFinish = function (numCourses, prerequisites) {
  const degree = {};
  const graph = {}; // directed graph

  // In Degree: This is applicable only for directed graph.
  // This represents the number of edges incoming to a vertex.
  for (let i = 0; i < numCourses; i++) {
    degree[i] = 0;
  }
  for (const [course, prereq] of prerequisites) {
    graph[prereq] = (graph[prereq] || []).concat(course);
    degree[course] = (degree[course] || 0) + 1;
  }

  // topo sort
  const stack = []; const
    result = [];
  for (const [key, value] of Object.entries(degree)) {
    if (value === 0) {
      // add all the 0 degree to stack to topoSort
      stack.push(key);
    }
  }

  while (stack.length !== 0) {
    const key = stack.pop();
    result.push(key);
    if (graph[key]) {
      for (const neighbor of graph[key]) {
        degree[neighbor]--;
        // if there are no more vertices coming in,
        // add it to the stack to process
        if (degree[neighbor] === 0) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result.length == numCourses;
};
