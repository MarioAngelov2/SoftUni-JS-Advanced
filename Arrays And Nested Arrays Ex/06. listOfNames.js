function solve(data) {

    let count = 0;
    let sorted = data.sort((a, b) => {
        return a.localeCompare(b);
    })

    sorted.forEach(el => {
        count++;
        console.log(`${count}.${el}`)
    });
}

solve(["John", "Bob", "Christina", "Ema"])