// section change:
const sections = document.querySelectorAll('section')
const links = document.querySelectorAll('nav a');
const bars = document.querySelector('.bars');

links.forEach((link,i) => {
	link.addEventListener('click', () => {
		sections.forEach(sec => {
			sec.classList.remove('active');
		});
		links.forEach(l => {
			l.classList.remove('active');
		});
		bars.classList.remove('active');
		setTimeout(() => {
			bars.classList.add('active');
		}, 800)
		sections[i].classList.add('active');
		links[i].classList.add('active');
		navbar.classList.remove('active');
	menu.classList.remove('fa-x')
	});
});
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
	if (!sections[0].classList.contains('active')) {
		sections.forEach(sec => {
			sec.classList.remove('active');
		});
		links.forEach(l => {
			l.classList.remove('active');
		});
		bars.classList.remove('active');
		setTimeout(() => {
			bars.classList.add('active')
		}, 800)
		sections[i].classList.add('active');
		links[i].classList.add('active');
		navbar.classList.remove('active');
	menu.classList.remove('fa-x')
	}
})
// Resume details change:
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn,i) => {
	btn.addEventListener('click', () => {
		const showDetails = document.querySelectorAll('.details')
		resumeBtns.forEach(btn => {
			btn.classList.remove('active-btn');
		});
		showDetails.forEach(e => {
			e.classList.remove('active');
		});
		btn.classList.add('active-btn');
		showDetails[i].classList.add('active');
	});
});

// Portfolio images slider
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let i = 0;

const slider = document.querySelector('.box .carousel .images');
const portDetails = document.querySelectorAll('.portfolio .container .box .details')
const activePort = () => {
	slider.style.transform = `translateX(calc(${i * -100}% - ${i * 2}rem))`;
	portDetails.forEach(d => {
		d.classList.remove('active');
	})
	portDetails[i].classList.add('active');
}
right.addEventListener('click', () => {
	if (i < 4) {
		i++;
		left.classList.remove('disabled');
	} else {
		i = 5;
		right.classList.add('disabled');
	}
	activePort();
})

left.addEventListener('click', () => {
	if (i > 1) {
		i--;
		right.classList.remove('disabled');
	} else {
		i = 0;
		left.classList.add('disabled');
	}
	activePort();
});

const navbar = document.querySelector('.nav');
const menu = document.querySelector('#menu-bars');

menu.addEventListener('click', () => {
	menu.classList.toggle('fa-x')
	navbar.classList.toggle('active')
})
