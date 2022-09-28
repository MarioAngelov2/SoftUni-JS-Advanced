function encodeAndDecodeMessages() {
    let button = document.querySelectorAll('button');
    button[0].addEventListener('click', encode);
    button[1].addEventListener('click', decode);

    function encode() {
        let input = document.querySelectorAll('textarea')[0].value;
        let encode = '';

        for (let i = 0; i < input.length; i++) {
            let ch = input[i];

            
        }
    }

    function decode() {

    }
}