// burger-menu
document.addEventListener('click', documentActions)

function documentActions(e) {
   const targetElement = e.target

   //----------------------------------------------
   // (блок-1) код для відкриття підменю при кліку на елемент з класом menu__arrow
   if (targetElement.closest('.menu__arrow')) {
      targetElement.closest('.menu__item').classList.toggle('active')
   }
   //----------------------------------------------

   //----------------------------------------------
   // (блок-2) код який додає клас для тега body і по якому стилізується меню бургер
   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
   }
   //----------------------------------------------

}