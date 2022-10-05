function notify(message) {
  let divNotificationElement = document.getElementById('notification');
  divNotificationElement.textContent = message;
  divNotificationElement.style.display = 'block';

  divNotificationElement.addEventListener('click', onClick);

  function onClick(e) {
    e.target.style.display = 'none';
  }
}