function solve(areaIn, volIn, input) {

    let data = JSON.parse(input);
    let result = [];

    for (let el of data) {
        let current = {
            area: areaIn.call(el),
            volume: volIn.call(el)
        }

        result.push(current);
    }

    return result;
}