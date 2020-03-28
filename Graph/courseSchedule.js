/**
 * https://leetcode.com/problems/course-schedule
 * It will be lot easier if you first draw this problem.
 */
var canFinish = function(numCourses, prerequisites) {
    let degree = {},
        graph = {}; //directed graph
        
    // In Degree: This is applicable only for directed graph. 
    // This represents the number of edges incoming to a vertex.
    for(let i = 0; i < numCourses; i++) {
        degree[i] = 0;
    }
    for(let [course, prereq] of prerequisites) {
        graph[prereq] = (graph[prereq] || []).concat(course);
        degree[course] = (degree[course] || 0) + 1
    }
    
    // topo sort
    let stack = [], result = [];
    for(let [key, value] of Object.entries(degree)) {
        if(value === 0) {
        // add all the 0 degree to stack to topoSort
            stack.push(key)
        }
    }
    
    while(stack.length !== 0) {
        let key = stack.pop();
        result.push(key);
        if(graph[key]) {
            for(let neighbor of graph[key]) {
                degree[neighbor]--;
                // if there are no more vertices coming in,
                // add it to the stack to process
                if(degree[neighbor] === 0) {
                    stack.push(neighbor)
                }
            }
        }
    }
    
    return result.length == numCourses;
};
