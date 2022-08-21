function solve(data) {

    let newArr = [];

    for (let el of data) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el)
        }
    }
    console.log(newArr)

}
solve([7, -2, 8, 9])