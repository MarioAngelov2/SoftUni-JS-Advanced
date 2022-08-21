function solve(data) {

    let sortedByLength = data.sort((a, b) => {
       return a.length - b.length || a.localeCompare(b)
    })

    return sortedByLength.join('\n')
}
// solve(['alpha', 
// 'beta', 
// 'gamma'])

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
))