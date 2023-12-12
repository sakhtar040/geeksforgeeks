const generate = (n) => {
    var q = [];
    q.push("1");
    while (n--) {
        var s1 = q[0];
        q.shift();
        console.log(s1);
        var s2 = s1;
        q.push(s1+"0");
        q.push(s2+"1");
    }
}

console.log(generate(10));