function solve(data) {

    const resultArr = [];
    let biggestNum = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < data.length; i++) {

        let currentNum = data[i];

        if (currentNum >= biggestNum) {
            biggestNum = currentNum;
            resultArr.push(currentNum)
        } else {
            continue;
        }
    }
    return resultArr;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])