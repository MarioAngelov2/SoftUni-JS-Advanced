function solve(...input) {
    
    let result = {};

    for (let el of input) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if (!result[type]) {
            result[type] = 0;
        }

        result[type]++;
    };

    let sorted = Object.entries(result).sort((a, b) => b - a);

    for (let [type, count] of sorted) {
        console.log(`${type} = ${count}`)
    }
    

}
solve('cat', 42, function () { console.log('Hello world!'); })