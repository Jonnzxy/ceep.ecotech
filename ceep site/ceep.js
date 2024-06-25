const menuLateral = document.querySelector('.menu-lateral');

menuLateral.addEventListener('mousewheel', (e) => {
  e.preventDefault();
  menuLateral.scrollTop += e.deltaY;
});