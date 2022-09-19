function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   

   function onClick () {
      let inputText = JSON.parse(document.querySelector('#inputs textarea').value);
      console.log(inputText)
   }
}