const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

window.onload = function() {
  popup.classList.add('show');
}

closeBtn.addEventListener('click', function() {
  popup.classList.remove('show');
});
