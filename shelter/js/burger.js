/************************************************/
// Бургер меню //
/************************************************/
// получаем элементы .menu__icon и .menu__body
const menuIcon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const modal = document.querySelector('.modal');
// если .menu__icon есть
if (menuIcon) {
	document.body.addEventListener("click", function (e) {
		// если кликнули по иконке бургер - переключаем классы
		// открываем меню или закрываем его
		if (e.target.closest('.icon-menu')) {
			document.body.classList.toggle('_lock');
			menuIcon.classList.toggle('_active');
			menuBody.classList.toggle('_active');
			// иначе кликнули вне иконки бургер - закрываем меню
			// не важно, кникнули ли мы по пункту меню или вне его
		
		} else {
			document.body.classList.remove('_lock');
			menuIcon.classList.remove('_active');
			menuBody.classList.remove('_active');
		};
		if (e.target.closest('.modal-active') && !e.target.closest('.modal__body')) {
			console.log(e.target)
			modal.classList.remove('modal-active')
			document.body.classList.remove('_locked');
			// иначе кликнули вне иконки бургер - закрываем меню
			// не важно, кникнули ли мы по пункту меню или вне его
		} 

	});
}
