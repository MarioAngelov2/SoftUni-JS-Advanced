function solution() {
    let result = '';

    function append(str) {
        result += str;
    }

    function removeStart(n) {
        result = result.slice(n);
    }

    function removeEnd(n) {
        result = result.slice(0, -n);
    }

    function print() {
        console.log(result);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}