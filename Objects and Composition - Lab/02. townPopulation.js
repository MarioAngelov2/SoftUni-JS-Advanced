function solve(data) {

    let townObj = {};

    for (let line of data) {
        let [city, population] = line.split('<->');
        population = Number(population);

        if (!townObj.hasOwnProperty(city)) {
            townObj[city] = population;
        } else {
            townObj[city] += population;
        }
    }

    for (let [key, value] of Object.entries(townObj)) {
        console.log(`${key}: ${value}`)
    }

}
// solve([
// 'Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'
// ])

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)