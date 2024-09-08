// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
		const callback = document.querySelector('.callback')
		const calc = document.querySelector('.calc')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active')
						callback.classList.add('active')
						calc.classList.add('active')
						body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active')
						callback.classList.remove('active')
						calc.classList.remove('active')
						body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
						callback.classList.remove('active')
						calc.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()

//swiper
const swiper = new Swiper('.swiper', {
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

//   // Responsive breakpoints
//   breakpoints: {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 3,
//     spaceBetween: 20
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//     spaceBetween: 30
//   },
// }
});

//  Num counter
function numCounter(selector, number, time, step) {
	const counter = document.querySelector(selector)

	let res = 0

	const allTime = Math.round(time / (number / step))

	let interval = setInterval(() => {
			res = res + step

			if (res === number) {
					clearInterval(interval)
			}
			counter.innerHTML = res
	}, allTime)
}

// ДАННАЯ ФУНКЦИЯ МОЖЕТ БЫТЬ ВЫЗВАННА НЕОГРАНИЧЕННОЕ КОЛИЧЕСВТО РАЗ

// Первый аргумент - селектор, куда будем выводить результат ( с . если класс и с # если id). ПРИМЕР: '.num1' или '#num1'
// Второй аргумент - конечное значение которое будет показано на странице
// Третий аргумент - время анмации (миллисекунды)
// Четвертый аргумен - шаг анимации ( например добавляем по 1 или по 10 или по 100)

// Play animation on scroll
// Проиграть анимацию при скролле
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
			// Вместо section-3 пишем тот класс секции, при скролле до которой хотим проиграть анимацию
			if (entry.target.classList.contains('count-1')) {
					numCounter('#num-1', 180, 3000, 10)
			}
			if (entry.target.classList.contains('count-2')) {
				numCounter('#num-2', 130, 3000, 10)
		}
		if (entry.target.classList.contains('count-3')) {
			numCounter('#num-3', 6, 3000, 1)
	}
	if (entry.target.classList.contains('count-4')) {
		numCounter('#num-4', 200, 3000, 10)
}
	})
})
document.querySelectorAll('.count__number').forEach((section) => {
	observer.observe(section)
})


