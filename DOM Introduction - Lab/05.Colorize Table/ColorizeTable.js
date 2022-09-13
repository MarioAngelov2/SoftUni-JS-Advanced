function colorize() {
    function colorize() {
        // for method
        // const rows = document.querySelectorAll('tr');
    
        // for (let i = 1; i < rows.length; i += 2) {
        //     rows[i].style.backgroundColor = 'teal'
        // }
    
        [...document.querySelectorAll('tr:nth-child(even)')]
        .forEach(el => el.style.backgroundColor = 'teal')
    }
}