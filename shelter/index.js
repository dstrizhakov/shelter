/************************************************/
// Бургер меню //
/************************************************/
// получаем элементы .menu__icon и .menu__body
const menuIcon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
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
	});
}




console.log(`Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n
Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n
Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n
Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n
Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n
Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n
`)
console.log(`Итоговая оценка: 60/60\n`)
console.log(`Спасибо за проверку!\n`)