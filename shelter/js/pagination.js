const pets = [
  {
    "name": "Jennifer",
    "img": "./img/pets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "./img/pets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "./img/pets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "./img/pets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "./img/pets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "./img/pets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "./img/pets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "./img/pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]

const shuffleCards = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const modalWrapper = document.getElementById('modal-pagination')

const createCard = (data) => {
	const item = document.createElement('div');
	item.classList.add('friends__item');
	item.classList.add('item-slider');
	const cart =`<div class="item-slider__body">
		<div class="item-slider__image">
			<img src=${data.img} alt=${data.name}>
		</div>
		<h4 class="item-slider__title title">${data.name}</h4>
		<a href="#" class="item-slider__button button">Learn more</a>
	</div>`
	item.innerHTML = cart;
	item.addEventListener('click', function () {
		modalWrapper.innerHTML = '';
		modalElement = createModal(data);
		modalWrapper.append(modalElement)
		document.body.classList.add('_locked');
		modalWrapper.classList.add('modal-active')
	})
	return item;
	}

const createModal = (data) => {
		const modal = document.createElement('div');
		modal.classList.add('modal__body');
		const close = document.createElement('div')
		close.classList.add('modal__close');
		close.innerHTML = `<img src="./img/close.svg" alt="close">`
		close.addEventListener('click', function(){
			document.body.classList.remove('_locked');
			modalWrapper.classList.remove('modal-active')
			modalWrapper.innerHTML = '';
		})
		const content = `<div class="modal__row">
			<div class="modal__img">
				<img src=${data.img} alt=${data.name}>
			</div>
			<div class="modal__content">
				<h3>${data.name}</h3>
				<h4>${data.breed}</h4>
				<p>${data.description}</p>
				<ul>
					<li><span>Age:</span>${data.age}</li>
					<li><span>Inoculations:</span>${data.inoculations[0]}</li>
					<li><span>Diseases:</span>${data.diseases[0]}</li>
					<li><span>Parasites:</span>${data.parasites[0]}</li>
				</ul>
			</div>
		</div>`
	
		modal.append(close);
		modal.insertAdjacentHTML('beforeend', content);
		return modal;
};

// размножаем питомцев на 6*8
const randomCards = [...shuffleCards(pets),...shuffleCards(pets),...shuffleCards(pets),...shuffleCards(pets),...shuffleCards(pets),...shuffleCards(pets)]

const totalCards = randomCards.length;

// Элементы пагинатора
const cardsPagination = document.getElementById('friends-pagination')
const controls = cardsPagination.querySelector('.friends__actions')
const container = cardsPagination.querySelector('.friends__row')

// кнопки пагигации для управления их стилями
const buttonStart = controls.querySelector('.paginator__start')
const buttonBack = controls.querySelector('.paginator__back')
const buttonIndicator = controls.querySelector('.paginator__indicator')
const buttonNext = controls.querySelector('.paginator__next')
const buttonEnd = controls.querySelector('.paginator__end')

//брейкпоинты
const pc = 1199.98;
const tablet = 991.98;
const mobile = 767.98;
let currentWidth = window.innerWidth;
let paginatorRenderedOnWidth = window.innerWidth;
let isListen = false;

// Определяем стартвые условия
let innerWidth = window.innerWidth;
let perPage = 8;
if (innerWidth <= pc) {
	perPage = 6;
}
if (innerWidth <= mobile) {
	perPage = 3;
}
//счетчик страниц
let i = 1;
let pages = Math.floor(totalCards/perPage);

function initPaginator () {
	if (cardsPagination) {
		// начальное состояние
		renderPage(randomCards, perPage, 1)
		buttonIndicator.textContent = 1;
		buttonBack.classList.add('unactive');
		buttonStart.classList.add('unactive');
		buttonEnd.classList.remove('unactive');
		buttonNext.classList.remove('unactive');
		// обработка кнопок и индикатора 
		controls.addEventListener('click', clickHandler);
		isListen = true;
	}
}

function clickHandler (e) {
	if (e.target.closest('.paginator__item')) {
		if (e.target.closest('.paginator__next')) {
			if (i>=pages) {
				return;}
			i++;
			renderPage(randomCards, perPage, i);
				if (i>=pages) {
					buttonNext.classList.add('unactive')
					buttonEnd.classList.add('unactive');
				}
				buttonBack.classList.remove('unactive');
				buttonStart.classList.remove('unactive');
				buttonIndicator.textContent = i;
		}
		if (e.target.closest('.paginator__back')) {
			if (i <= 1) {
				return;}
				i--;
				renderPage(randomCards, perPage, i);
				if (i <= 1) {
					buttonBack.classList.add('unactive');
					buttonStart.classList.add('unactive');
				}
				buttonEnd.classList.remove('unactive');
				buttonNext.classList.remove('unactive');
				buttonIndicator.textContent = i;
		}
		if (e.target.closest('.paginator__end')) {
			if (i>=pages) {
				return;}
			i = pages;
			renderPage(randomCards, perPage, i);
			buttonNext.classList.add('unactive');
			buttonEnd.classList.add('unactive');
			buttonBack.classList.remove('unactive');
			buttonStart.classList.remove('unactive');
			buttonIndicator.textContent = i;
		}
		if (e.target.closest('.paginator__start')) {
			if (i<=1) {
				return;}
			i = 1;
			renderPage(randomCards, perPage, i);
			buttonNext.classList.remove('unactive');
			buttonEnd.classList.remove('unactive');
			buttonBack.classList.add('unactive');
			buttonStart.classList.add('unactive');
			buttonIndicator.textContent = i;
		}
}
}

function renderPage (items, perPage, page) {
	paginatorRenderedOnWidth = window.innerWidth;
	container.innerHTML = '';
	const currentPageCards = items.slice((page - 1) * perPage, page * perPage)
	currentPageCards.forEach(slide => {
		const slideCard = createCard(slide);
		container.append(slideCard);
	});
	
}

// инитим пагинатор с другими настройками при ресайзе
// ? добавить мемоизацию
window.addEventListener(`resize`, event => {
	// если уже есть слушатель событий, удаляем его
	if (isListen) {
		controls.removeEventListener('click', clickHandler);
		isListen = false;
	}
		//читаем ширину страницы, переопределяем стартовые параметры
		innerWidth = window.innerWidth;
		perPage = 8;
		if (innerWidth <= pc) {
			perPage = 6;
		}
		if (innerWidth <= mobile) {
			perPage = 3;
		}
		i = 1;
		pages = Math.floor(totalCards/perPage);

		//повторно инициализируем пагинатор
  initPaginator();
}, false);

initPaginator();