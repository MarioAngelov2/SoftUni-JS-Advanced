function solve(data) {

    let arr = data.slice();

    let sorted = arr.sort((a, b) => {
        return a - b;
    })

    sorted = sorted.slice(0, 2)
    console.log(sorted.join(' '))

}
solve([30, 15, 50, 5])