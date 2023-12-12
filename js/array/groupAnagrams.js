const _groupAnagrams = (strs) => {
    if(strs.length === 1) {
        return [strs]
    } else {
        let output = []
        let pushed = {}
        for(let i=0; i<strs.length; i++) {
            let map = {}
            let out = []
            for(let j=0; j<strs[i].length; j++) {
                if(map[strs[i][j]]) {
                    map[strs[i][j]] = map[strs[i][j]]
                } else {
                    map[strs[i][j]] = 1
                }
            }

            if(!pushed[i]) {
                out.push(strs[i])
            }
            pushed[i] = true

            console.log("map", map)

            for(let k=i+1; k<strs.length; k++) {
                let _map = {}
                for(let m= 0; m<strs[k].length; m++) {
                    if(_map[strs[k][m]]) {
                        _map[strs[k][m]] = _map[strs[k][m]]
                    } else {
                        _map[strs[k][m]] = 1
                    }
                }

                console.log("_map", _map)

                let bool = true
                for(let ii in map) {
                    if(map[ii] != _map[ii]) {
                        bool = false
                    }
                }

                if(!Object.keys(map).length && !Object.keys(_map).length) {
                    bool = true
                } else if(!Object.keys(map).length || !Object.keys(_map).length) {
                    bool = false
                }

                if(bool) {
                    if(!pushed[k]) {
                        out.push(strs[k])

                    }
                    pushed[k] = true
                }
            }

            if(out.length) {
                output.push(out)
            }
        }

        return output
    }
};

const hash = (key)=>{
    return key.split('').sort().join("");
}
var groupAnagrams = function(strs) {
    const map = new Map();
    strs.forEach(str=>{
        const key = hash(str);
        if(map.has(key)){
            map.get(key).push(str);
        }else{
            map.set(key, [str]);
        }
    })
    return [...map.values()];
};

console.log(groupAnagrams(["","", "team", "meat", "eat", "ate", "tea", ""]))