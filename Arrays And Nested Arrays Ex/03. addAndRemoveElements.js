function solve(data) {

    let initialNumber = 0;
    let resultArr = [];

    for (let line of data) {

        if (line === 'add') {
            initialNumber++;
            resultArr.push(initialNumber);
        } else if (line === 'remove') {
            initialNumber++;
            resultArr.pop(initialNumber);
        }

    }

    if (resultArr.length === 0) {
        console.log('Empty')
    } else {
        console.log(resultArr.join('\n'))
    }
}
solve(['add',
    'add',
    'add',
    'add'])

solve(['add',
    'add',
    'remove',
    'add',
    'add']
)

solve(['remove',
    'remove',
    'remove']
)