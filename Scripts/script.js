document.addEventListener("DOMContentLoaded", () => {

	const header = document.querySelector('header');
	const navbar = document.querySelector('nav');
	const home = document.querySelector('.home');
	const scrollBtn = document.getElementById('scrollUp');
	const navbarHeight = navbar.offsetHeight;

	window.addEventListener("scroll", () => {

		if(window.scrollY >= header.offsetTop + header.offsetHeight) {
			home.style.marginTop = navbarHeight + 'px';
			navbar.classList.add("fixed-top");
		}
		else {
			home.style.marginTop = '';
			navbar.classList.remove("fixed-top");
		}

		if(window.scrollY >= home.offsetTop + home.offsetHeight / 4) {
			scrollBtn.style.opacity = "0.7";
			scrollBtn.style.cursor = "pointer";
		}
		else {
			scrollBtn.style.opacity = "0";
			scrollBtn.style.cursor = "";
		}
	});

	scrollBtn.addEventListener("click", () => {
		if(scrollBtn.style.opacity != '0')
			$('html,body').animate({ scrollTop: 0 }, 400);
	})

})