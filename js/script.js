const mobileNav = document.querySelector('.mobile-nav');
const mobileNavButton = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.burger-menu-close');

mobileNavButton.addEventListener('click', function () {
	mobileNav.classList.toggle('active');
	mobileNavButton.classList.toggle('closed');
	closeButton.classList.toggle('closed');
	document.body.classList.toggle('no-scroll');
})

closeButton.addEventListener('click', function () {
	mobileNav.classList.toggle('active');
	closeButton.classList.toggle('closed');
	mobileNavButton.classList.toggle('closed');
	document.body.classList.toggle('no-scroll');
})



const videoButton = document.querySelector('#video-button');
const videoButtonIcon = document.querySelector('#video-icon');
const videoFile = document.querySelector('#video');

videoButton.addEventListener('click', function () {

	if (videoFile.paused) {
		videoFile.play();
		videoButtonIcon.src = './img/pause.svg';
	} else {
		videoFile.pause();
		videoButtonIcon.src = './img/play.svg';
	}

})