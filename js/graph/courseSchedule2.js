const getAdjList = (numCourses, matrix) => {
    let list = new Map()
    /*for(let i=0; i<numCourses; i++) {
        list.set(i, [])
    }*/
    for(node of matrix) {
        let [n, v] = node
        if(!list.has(n)) {
            list.set(n, [])
        }
        list.get(n).push(v)
    }
    return list
}

const courseSchedule = (numCourses, prerequisites) => {
    const adjList = getAdjList(numCourses, prerequisites)
    console.log(adjList)
    let visited = {}
    let order = []

    const dfs = (course) => {
        if(visited[course]) {
            return false
        }
        if(adjList.get(course) === [] || !adjList.has(course)) {
            !order.includes(course) && order.push(course)
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
        !order.includes(course) && order.push(course)
        return true
    }

    for(let i=0; i<numCourses; i++) {
        if(!dfs(i)) {
            return []
        }
    }
    return order
}

let numCourses = 1
let prerequisites = []
console.log(courseSchedule(numCourses, prerequisites))