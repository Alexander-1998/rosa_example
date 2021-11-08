//Select Element function
const selectElement = function (element) {
	return document.querySelector(element);
}

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
	body.classList.toggle('open');
});



function Appear() {

	//Переменные с получеными селекторами
	let hero = document.querySelector('.hero'), //Подучаем селектор с классом .hero первый блок
		restaurantDescription = document.querySelector('.restaurant-description'), //Подучаем селектор с классом .restaurant-description второй блок описание
		restaurantInfoImg = document.querySelector('.restaurant-info-img'), //Подучаем селектор с классом .restaurant-info-img второй блок картинка
		testefulRecipes = document.querySelector('.testeful-recipes'), //Подучаем селектор с классом .restaurant-info-img третий блок картинка
		testefulHeadline = document.querySelector('.testeful-headline'), //Подучаем селектор с классом .testeful-headline третий блок Главная строчка описания
		testefulSubHeadline = document.querySelector('.testeful-sub-headline'), //Подучаем селектор с классом .testeful-sub-headline третий блок подстрока описания
		discoveryMenuDescription = document.querySelector('.discovery-menu-description'), //Подучаем селектор с классом .discovery-menu-description четвертый блок описание
		imageGroupDiscovery = document.querySelector('.image-group-discovery'), //Подучаем селектор с классом .image-group-discovery четвертый блок
		firstRow = document.querySelector('.image-group-discovery .first-row'), //Подучаем селектор с классом .first-row четвертый блок первый ряд картинок
		secondRow = document.querySelector('.image-group-discovery .second-row'), //Подучаем селектор с классом .second-row четвертый блок второй ряд картинок
		perfectBlend = document.querySelector('.perfect-blend'), //Подучаем селектор с классом .perfect-blend пятый блок картинка
		perfectBlendHeadline = document.querySelector('.perfect-blend-headline'), //Подучаем селектор с классом .perfect-blend-headline пятый блок главная строчка 
		perfectBlendSubHeadline = document.querySelector('.perfect-blend-sub-headline'), //Подучаем селектор с классом .perfect-blend-sub-headline пятый блок подстрока 
		culinaryDelightDescription = document.querySelector('.culinary-delight-description'), //Подучаем селектор с классом .culinary-delight-description шестой блок  
		culinaryImageOne = document.querySelector('.culinary-image-one'), //Подучаем селектор с классом .culinary-image-one шестой блок  первая картинка
		culinaryImageTwo = document.querySelector('.culinary-image-two'); //Подучаем селектор с классом .culinary-image-two шестой блок  вторая картинка


	//Перменные с местоположение элемента от верхнего окна браузера

	let restaurantDescriptionPosition = restaurantDescription.getBoundingClientRect().top,
		restaurantInfoImgPosition = restaurantInfoImg.getBoundingClientRect().top,
		testefulRecipesPosition = testefulRecipes.getBoundingClientRect().top,
		testefulHeadlinePosition = testefulHeadline.getBoundingClientRect().top,
		discoveryMenuDescriptionPosition = discoveryMenuDescription.getBoundingClientRect().top,
		imageGroupDiscoveryPosition = imageGroupDiscovery.getBoundingClientRect().top,
		perfectBlendPosition = perfectBlend.getBoundingClientRect().top,
		culinaryDelightDescriptionPosition = culinaryDelightDescription.getBoundingClientRect().top;



	//Переменные высотой окна браузера и делённая на 1.8, это нужно для того что бы подгрузка происходила чуть позже
	let screenPosition = window.innerHeight / 1.1;

	//	Переменная которая показывает на сколько была прокрученна по Y
	let scrolled = window.pageYOffset / 3; // Делю на 8 потому-что картинка уплывает в низ и её не видно!!
	hero.style.backgroundPositionY = scrolled - 150 + 'px';
	testefulRecipes.style.backgroundPositionY = scrolled - 350 + 'px';
	perfectBlend.style.backgroundPositionY = scrolled - 800 + 'px';


	//Условия, при которых добавляется класс animate-left
	if (restaurantDescriptionPosition < screenPosition) {
		restaurantDescription.classList.add('animate-left');
	} else {
		restaurantDescription.classList.remove('animate-left');

	}

	if (culinaryDelightDescriptionPosition < screenPosition) {
		culinaryDelightDescription.classList.add('animate-left');
		culinaryImageOne.classList.add('animation-top');
		culinaryImageTwo.classList.add('animation-bottom');

	} else {
		culinaryDelightDescription.classList.remove('animate-left');
		culinaryImageOne.classList.remove('animation-top');
		culinaryImageTwo.classList.remove('animation-bottom');
	}
	//Условия, при которых добавляется класс animate-right
	if (restaurantInfoImgPosition < screenPosition) {
		restaurantInfoImg.classList.add('animate-right');
	} else {
		restaurantInfoImg.classList.remove('animate-right');
	}

	if (discoveryMenuDescriptionPosition < screenPosition) {
		discoveryMenuDescription.classList.add('animate-right');
	} else {
		discoveryMenuDescription.classList.remove('animate-right');
	}
	//Условия, при которых добавляется класс animate-top и animate-bottom
	if (testefulHeadlinePosition < screenPosition) {
		testefulHeadline.classList.add('animate-top');
		testefulSubHeadline.classList.add('animate-bottom');
	} else {
		testefulHeadline.classList.remove('animate-top');
		testefulSubHeadline.classList.remove('animate-bottom');
	}

	if (perfectBlendPosition < screenPosition) {
		perfectBlendHeadline.classList.add('animate-top');
		perfectBlendSubHeadline.classList.add('animate-bottom');
	} else {
		perfectBlendHeadline.classList.remove('animate-top');
		perfectBlendSubHeadline.classList.remove('animate-bottom');
	}

	//Условия, при которых добавляется класс animation-top и animation-bottom


	//Условия, при которых добавляется класс animate-left-image-one
	if (imageGroupDiscoveryPosition < screenPosition) {
		firstRow.classList.add('animate-left-image-one');
		secondRow.classList.add('animate-left-image-two');
	} else {
		firstRow.classList.remove('animate-left-image-one');
		secondRow.classList.remove('animate-left-image-two');
	}

	//	Условие если размер экрана маленький
	let clientWindowHeight = window.innerHeight;
	if (clientWindowHeight < 900) {
		scrolled = window.pageYOffset / 8; // Делю на 8 потому-что картинка уплывает в низ и её не видно!!
		hero.style.backgroundPositionY = scrolled - 150 + 'px';
		testefulRecipes.style.backgroundPositionY = scrolled - 200 + 'px';
		perfectBlend.style.backgroundPositionY = scrolled - 500 + 'px';
	}
}
window.addEventListener('scroll', Appear);
