// SMOOTH ANIMATION

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

const links = document.querySelectorAll("a:link");

links.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const href = link.getAttribute("href");

		// Scroll back to top
		if (href === "#") return window.scrollTo({top: 0, behavior: "smooth"});

		// Scroll to other links
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({behavior: "smooth"});
		} else if (href) {
		} else {
			var newTab = window.open();
			newTab.opener = null;
			newTab.location = href;
		}
	});
});

// NAVBAR POSITION

let navbar = document.getElementById("main-nav");
let logotipe = document.getElementById("nav-logotipe");
let bannerSection = document.getElementById("inicio");

window.addEventListener("scroll", (e) => {
	let scrollPos = window.scrollY;
	let navPos = navbar.getBoundingClientRect().top;

	if (scrollPos > 0) {
		navbar.classList.add("sticky");
		logotipe.classList.add("logotipe-scale");
		bannerSection.style.paddingTop = "150px";
	} else {
		navbar.classList.remove("sticky");
		logotipe.classList.remove("logotipe-scale");
		bannerSection.style.paddingTop = "0";
	}
});

// NAVBAR POSITION --------->

// CARUSEL BANNER SERVICE

let i = 0;

function setListInterval() {
	interval = setInterval(toggleClass, 6000);
}

function toggleClass() {
	const li = document.querySelectorAll(".service");
	const img = document.querySelectorAll(".imgService");

	if (li[i].classList.contains("ib") && img[i].classList.contains("ib")) {
		li[i].classList.replace("ib", "hd");
		img[i].classList.replace("ib", "hd");

		i == li.length - 1 ? (i = 0) : i++;

		li[i].classList.replace("hd", "ib");
		img[i].classList.replace("hd", "ib");
	}
}

var interval;
var execTimeOut;
var showCarrousel = window.innerWidth > 640;
var isInit = false;

function verifyInterval() {
	const show = window.innerWidth > 640;
	if ((showCarrousel && !isInit) || (!showCarrousel && show)) {
		isInit = true;
		setListInterval();
	} else if (!show) {
		clearInterval(interval);
	}

	showCarrousel = show;
}

verifyInterval();
window.onresize = function () {
	clearTimeout(execTimeOut);
	execTimeOut = setTimeout(() => {
		verifyInterval();
	}, 2000);
};

// CARUSEL BANNER SERVICE --------->
