class Solution {
    //Function to add two numbers represented by linked list.
    reverse=(node)=>{
        let p= node;
        let prev= null;
        while(p!==null){
            let temp= p.next;
            p.next= prev;
            prev= p;
            p= temp
        }
        node=prev;
        return node;
    }
    handle=(p)=>{
        let prev=null;
        let carry= 1;
        while(p!==null){
            if(carry===1){
                let m = p.data+1;
                p.data= (m%10);
                carry= Math.floor(m/10);
                prev=p;
                p=p.next;
            }
            else break;
        }
        if(carry===1){
            prev.next= new Node(1);
        }
    }
    //Function to add two numbers represented by linked list.
    addTwoLists(first, second)
    {
        let f = this.reverse(first);
        let s= this.reverse(second);
        let p= f;
        let p2= s;
        let carry=0;
        let prev=null;
        while(p!==null && p2!==null){
            let sum= p.data + p2.data+carry;
            p.data= sum%10;
            p2.data= sum%10;
            carry= Math.floor(sum/10)
            prev=p;
            p=p.next;
            p2=p2.next;
        }
        if(p!==null){
            if(carry===1) {this.handle(p)}
            return this.reverse(f)
        }
        if(p2 !== null){
            if(carry===1){this.handle(p2)}
            return this.reverse(s)
        }
        else {
            if(carry===1)prev.next= new Node(1);
            return this.reverse(f)
        }
    }
}