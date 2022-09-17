function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let userInput = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let counter = 0;

   
   for (let town of towns) {
      if (town.textContent.includes(userInput)) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   result.textContent = `${counter} matches found`
}
