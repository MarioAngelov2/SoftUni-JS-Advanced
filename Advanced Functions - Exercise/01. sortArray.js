function solve(arr, criteria) {

    let result = arr;

    if (criteria === 'asc') {
         result.sort((a, b) => {
            return a - b
         });
    } else if (criteria === 'desc') {
         result.sort((a, b) => {
            return b - a
         });
    }
    return result
}
solve([14, 7, 17, 6, 8], 'desc')