function encodeAndDecodeMessages() {
    let button = document.querySelectorAll('button');
    button[0].addEventListener('click', encode);
    button[1].addEventListener('click', decode);

    let input = document.querySelectorAll('textarea')[0]
    let output = document.querySelectorAll('textarea')[1]

    function encode() {
        let encode = '';
        let inputText = input.value;

        for (let i = 0; i < inputText.length; i++) {
            let ch = inputText[i];
            encode += String.fromCharCode(ch.charCodeAt() + 1);
        }
        output.value = encode;
        input.value = '';
    }

    function decode() {

        let decode = '';
        let inputFromEncode = input.value;

        for (let i = 0; i < inputFromEncode.length; i++) {
            let currentCh = inputFromEncode[i];
            decode += String.fromCharCode(currentCh.charCodeAt() - 1);
        }

        output.value = decode;
    }
}