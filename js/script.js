document.addEventListener('DOMContentLoaded', function () {
	//  Меню 
	const NAV = document.querySelector('.header');
	const MENU_BUTTON = NAV.querySelector('.menu__burger');
	const LINK = NAV.querySelectorAll('.menu__link');
	const BACKING = NAV.querySelector('.black-backing');

	MENU_BUTTON.addEventListener('click', function () {
		NAV.classList.toggle('header_active');
		document.body.classList.toggle('no-scroll');
	});

	BACKING.addEventListener('click', function () {
		NAV.classList.toggle('header_active');
		document.body.classList.toggle('no-scroll');
	});

	NAV.querySelectorAll('.menu__link').forEach(item => {
		item.addEventListener('click', function () {
			NAV.classList.remove('header_active');
			document.body.classList.remove('no-scroll');
		})
	})

	//  Слайдер hero
	$('.hero').slick({
		autoplay: false,
		arrows: false,
		dots: true,
		adaptiveHeight: true,
		infinite: true,
		mobileFirst: true,
		swipeToSlide: true,
		waitForAnimate: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: true,
		verticalSwiping: true,

	});
	// Слайдер news
	$('.news__cards').slick({
		arrows: false,
		infinite: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
		]
	});
	//  попап фотографий 
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 500
		}
	});



});
// map
function initMap() {
	const myLatLng = { lat: -25.363, lng: 131.044 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 8,
		center: myLatLng,
	});
	new google.maps.Marker({
		map: map,
		icon: "../img/Pin.svg",
		position: { lat: -24.5, lng: 130.044 },

		draggable: false
	});


}


// 

const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];

formArr.forEach((el) => {
	if (el.hasAttribute("data-reg")) {
		el.setAttribute("is-valid", "0");
		validFormArr.push(el);
	}
});

form.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({ target }) {
	if (target.hasAttribute("data-reg")) {
		inputCheck(target);
	}
}

function inputCheck(el) {
	const inputValue = el.value;
	const inputReg = el.getAttribute("data-reg");
	const reg = new RegExp(inputReg);
	if (reg.test(inputValue)) {
		el.setAttribute("is-valid", "1");
		el.style.borderBottom = "2px solid rgb(0, 196, 0)";
	} else {
		el.setAttribute("is-valid", "0");
		el.style.borderBottom = "2px solid rgb(255, 0, 0)";
	}
}

function buttonHandler(e) {
	const allValid = [];
	validFormArr.forEach((el) => {
		allValid.push(el.getAttribute("is-valid"));
	});
	const isAllValid = allValid.reduce((acc, current) => {
		return acc && current;
	});

	if (!Boolean(Number(isAllValid))) {
		e.preventDefault();
	}
}
