function solve(matrix) {

    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
        const row = matrix[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {
            if (matrix[rowIndex] > matrix[colIndex]) {
                console.log(matrix[rowIndex])
            }
        }
    }

}
solve([[20, 50, 10],
    [8, 33, 145]])