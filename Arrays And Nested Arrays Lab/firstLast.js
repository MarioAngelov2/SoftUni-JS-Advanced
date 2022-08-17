function solve(data) {
    
    let sum = 0;
    let first = Number(data.shift());
    let last = Number(data.pop());

    sum += first + last

    console.log(sum)

}
solve(['20', '30', '40'])