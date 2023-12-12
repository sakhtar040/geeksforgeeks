class BackTrackingTemplate {
    constructor() {

    }

    isValidState(state) {
        //check for valid state
        return true
    }

    getCandidates(state) {
        return []
    }

    search(state, solutions) {
        if(this.isValidState(state)) {
            solutions.push(state)
            return
        }

        for(let candidate in this.getCandidates(state)) {
            state.set(candidate)
            this.search(state, solutions)
            state.remove(candidate)
        }
    }

    solve() {
        let solutions = []
        let state = new Set()
        this.search(state, solutions)
        return solutions
    }
}