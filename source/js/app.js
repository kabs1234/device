const dropdownMenu = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.dropdown-button');


dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('dropdown--active');
})
