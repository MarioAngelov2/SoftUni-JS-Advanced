function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchBar = document.getElementById('searchField');
   let tableRows = document.querySelectorAll('tbody tr');

   function onClick() {

      for (let row of tableRows) {
         if (searchBar.value !== '' && row.innerHTML.includes(searchBar.value)) {
            row.className = 'select'
         } else {
            row.classList.remove('select');
         }
      }
      searchBar.value = '';
   }
}
