function solve(data) {

    const resultArr = [];
    const sorted = data.sort((a, b) => {
        return b - a;
    })

    while (sorted.length !== 0) {
      
        let smallestNum = sorted.pop();
        let biggestNum = sorted.shift();

        resultArr.push(smallestNum, biggestNum)
    }

    return resultArr;
}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))