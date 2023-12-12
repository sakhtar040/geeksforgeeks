const getAdjList = (numCourses, matrix) => {
    let list = new Map()
    for(let i=0; i<numCourses; i++) {
        list.set(i, [])
    }
    for(node of matrix) {
        let [n, v] = node
        if(!list.has(n)) {
            list.set(n, [])
        }
        if(!list.has(v)) {
            list.set(v, [])
        }
        list.get(n).push(v)
    }
    return list
}

const courseSchedule = (numCourses, prerequisites) => {
    const adjList = getAdjList(numCourses, prerequisites)
    console.log(adjList)
    let visited = {}

    const dfs = (course) => {
        if(visited[course]) {
            return false
        }
        if(adjList.get(course) === []) {
            return true
        }

        visited[course] = true
        for(let node of adjList.get(course)) {
            if(!dfs(node)) {
                return false
            }
        }
        visited[course] = undefined
        adjList.set(course, [])
        return true
    }

    for(let i=0; i<numCourses; i++) {
        if(!dfs(i)) {
            return false
        }
    }
    return true
}

let numCourses = 20
let prerequisites = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]
console.log(courseSchedule(numCourses, prerequisites))