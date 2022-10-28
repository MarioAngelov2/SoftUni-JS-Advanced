function solve(arr) {
    let juice = new Map();
    let botles = {};

    for (let line of arr) {
        let [juiceName, juiceQty] = line.split(' => ') 
        juiceQty = Number(juiceQty)
        
       if (juice.has(juiceName)) {
        
       }
    }
}
solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])