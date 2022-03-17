const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');

btn.addEventListener('click', openModal);

function openModal() {
  modal.classList.add('open');
  attachModalEvents();
}

function attachModalEvents() {
  modal.querySelector('.close').addEventListener('click', closeModal);
  document.addEventListener('keydown', hadleEscape);
  // обработка события клика вне модального окна
  modal.addEventListener('click', handleOutside);
  // обработка события клика вне модального окна

}

function handleOutside (event) {
  isClickOutside = !!event.target.closest('modal-content');

  if (!isClickOutside) {
    closeModal();
  }
}

function hadleEscape(event) {
  if (event.key === 'Escape') {
    closeModal();  
  }
}

function closeModal() {
  modal.classList.remove('open');

  detachModalEvents();
}

function detachModalEvents() {
  modal.querySelector('.close').removeEventListener('click', closeModal);
  document.removeEventListener('keydown', hadleEscape);
  modal.removeEventListener('click', handleOutside); 
}
