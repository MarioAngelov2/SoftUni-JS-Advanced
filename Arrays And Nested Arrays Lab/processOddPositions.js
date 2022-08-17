function solve(data) {

    let result = [];

    for (let i = 0; i < data.length; i++) {

        if (i % 2 !== 0) {
            let currentNum = data[i] * 2;
            result.push(currentNum)
        }
    }

    return result.reverse().join(' ');
}
console.log(solve([10, 15, 20, 25]))