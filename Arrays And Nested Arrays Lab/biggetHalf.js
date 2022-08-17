function solve(data) {

    let sorted = data.sort((a, b) => {
       return a - b;
    }) 

    const result = [];

    for (let i = Math.floor(sorted.length / 2); i < sorted.length; i++) {
        result.push(sorted[i]);
    }

    return result;

}
console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))