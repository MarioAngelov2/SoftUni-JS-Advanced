window.addEventListener("load", solve);

function solve() {
  document.getElementById('publish-btn').addEventListener('click', createPost);
  let titleElementInput = document.getElementById('post-title');
  let categoryElementInput = document.getElementById('post-category');
  let contentElementInput = document.getElementById('post-content');

  function createPost(e) {
    let titleValue = titleElementInput.value;
    let categoryValue = categoryElementInput.value;
    let contentValue = contentElementInput.value;

    if (!titleValue || !categoryValue || !contentValue) {
      return;
    }
    debugger
  }
}
