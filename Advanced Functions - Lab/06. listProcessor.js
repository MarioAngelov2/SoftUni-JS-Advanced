function solve(arr) {

    let result = [];

    for (let el of arr) {
        let [command, str] = el.split(' ');
        
        switch (command) {
            case 'add':
                add(str, result);
                break;

            case 'remove':
                remove(str, result)
                break;

            case 'print':
                print(result);
                break;
        }
    }

    function add(str, result) {
        result.push(str)
    }

    function remove(str, result) {
        while (result.includes(str)) {
            let index = result.indexOf(str);
            result.splice(index, 1);
        }
    }   

    function print(result) {
        console.log(result.join(','))
    }
}