class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }

    push(a){
        this.arr.push(a);
        this.top++;
    }

    pop(){
        this.arr.pop();
        this.top--;
    }

    front(){
        return this.arr[this.top];
    }

    empty(){
        return this.top === -1;
    }
}

class StackQueue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }

    push(B){
        this.s1.push(B)
    }

    pop(){
        if(this.s1.empty()) {
            return -1
        }
        while(!this.s1.empty()) {
            this.s2.push(this.s1.front())
            this.s1.pop()
        }
        let temp = this.s2.front()
        this.s2.pop()
        while(!this.s2.empty()) {
            this.s1.push(this.s2.front())
            this.s2.pop()
        }
        return temp
    }
}