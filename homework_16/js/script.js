function documentActions(e) {
   const targetElement = e.target;
   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open');
   }
}
document.addEventListener('click', documentActions);