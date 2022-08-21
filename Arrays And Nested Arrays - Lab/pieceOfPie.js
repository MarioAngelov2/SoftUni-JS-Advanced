function solve(arr, flavorOne, flavorTwo) {

    const first = arr.indexOf(flavorOne);
    const second = arr.indexOf(flavorTwo);

    let newArr = arr.slice(first, second + 1)
    return newArr

}
console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))