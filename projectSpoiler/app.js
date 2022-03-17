document.getElementById('myBtn').addEventListener('click', toggleSpoiler);

function toggleSpoiler() {
  document.getElementById('spoiler').classList.toggle('closed');
  touchSpoilerEvents();
}

function touchSpoilerEvents (event) {
  document.addEventListener('keydown', hadleEscape);
}

function hadleEscape (event) {
  if (event.key === 'Escape') {
    toggleSpoiler();
    document.removeEventListener('keydown', hadleEscape);
  }
}