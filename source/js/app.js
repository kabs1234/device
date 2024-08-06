const dropdownMenu = document.querySelector('.dropdown__menu');
const dropdownButton = document.querySelector('.dropdown__button');


dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('dropdown__menu--active');
  dropdownButton.classList.toggle('dropdown__button--active');
})
