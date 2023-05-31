let modalForm = document.querySelector('.modalForm');
let modalFormContentOpen = document.querySelectorAll('.modalFormContent-open');
let popupScrollCloses = document.querySelectorAll('.popupScrollCloses');
let body1 = document.querySelector('.body');

modalFormContentOpen.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modalForm.classList.add('active');
    body1.classList.add('active');
  });
});

popupScrollCloses.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    modalForm.classList.remove('active');
    body1.classList.remove('active');
  });
});
