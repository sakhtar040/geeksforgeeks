class Area {
    calculateArea(array) {
        let stack = []
        let area = 0
        let index = 0
        while(index < array.length) {
            if(stack.length === 0 || array[stack[stack.length - 1]] <= array[index]) {
                stack.push(index)
                index++
            } else {
                let topStack = stack.pop()
                let newArea = array[topStack] * (stack.length > 0 ? (index - stack[stack.length - 1] - 1) : index)
                area = Math.max(area, newArea)
            }
        }
        while(stack.length > 0) {
            let topStack = stack.pop()
            let newArea = array[topStack] * (stack.length > 0 ? (index - stack[stack.length - 1] - 1) : index)
            area = Math.max(area, newArea)
        }
        console.log(area)
    }
}

const area = new Area()
area.calculateArea([6, 2, 5, 4, 5, 1, 6])
area.calculateArea([2,1,5,6,2,3])