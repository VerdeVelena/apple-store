// common
document
	.querySelectorAll(".watch-controls, .watch-controls bottom, .iphone-btn")
	.forEach((control) => {
		addEventListener("click", () => {});
	});
// end of common
// slideshow
const slideshowDivs = () => {
	for (let i = 1; i <= 5; i++) {
		const div = document.createElement("div");

		div.style.backgroundImage = `url(Final_Files/images/slideshow/section-1-bg-${i}.jpg)`;

		i === 1 && div.classList.add("change");

		document.querySelector(".slideshow").appendChild(div);
	}
};
slideshowDivs();

const divs = document.querySelectorAll(".slideshow div");

let a = 1;
const slideshow = () => {
	setInterval(() => {
		a++;
		const div = document.querySelector(".slideshow .change");
		div.classList.remove("change");
		if (a < divs.length) {
			div.nextElementSibling.classList.add("change");
		} else {
			divs[0].classList.add("change");
			a = 1;
		}
	}, 20000);
};
slideshow();
// end of slideshow

// rotated box
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;
const rotatedBox = document.querySelector(".rotated-box");

document.querySelector(".top-x-control").addEventListener("click", () => {
	rotatedBox.style.transform = `rotateX(${(x += 25)}deg)rotateY(${y}deg)rotateZ(${z}deg)`;
});
document.querySelector(".bottom-x-control").addEventListener("click", () => {
	rotatedBox.style.transform = `rotateX(${(x -= 25)}deg)rotateY(${y}deg)rotateZ(${z}deg)`;
});
document.querySelector(".left-y-control").addEventListener("click", () => {
	rotatedBox.style.transform = `rotateX(${x}deg)rotateY(${(y -= 25)}deg)rotateZ(${z}deg)`;
});
document.querySelector(".right-y-control").addEventListener("click", () => {
	rotatedBox.style.transform = `rotateX(${x}deg)rotateY(${(y += 25)}deg)rotateZ(${z}deg)`;
});
document.querySelector(".top-z-control").addEventListener("click", () => {
	rotatedBox.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${(z -= 25)}deg)`;
});
document.querySelector(".bottom-z-control").addEventListener("click", () => {
	rotatedBox.style.transform = `rotateX(${x}deg)rotateY(${y}deg)rotateZ(${(z += 25)}deg)`;
});
const playPause = () => {
	if (bool) {
		interval = setInterval(() => {
			rotatedBox.style.transform = `rotateX(${x}deg)rotateY(${y++}deg)rotateZ(${z}deg)`;
		}, 100);
	} else {
		clearInterval(interval);
	}
};
playPause();

document.querySelector(".controls").addEventListener("mouseover", () => {
	bool = false;
	playPause();
});
document.querySelector(".controls").addEventListener("mouseout", () => {
	bool = true;
	playPause();
});
// end of rotated box

// section3
const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
	if (
		window.pageYOffset + window.innerHeight >=
		section3Content.offsetTop + section3Content.offsetHeight / 2
	) {
		section3Content.classList.add("change");
	}
});
// end of section3

// section 4
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");

const watchRightControl = document.querySelector(".watch-right-control");

const watchBottomControl = document.querySelector(".watch-bottom-control");

const watchLeftControl = document.querySelector(".watch-left-control");

let axisY = 0;
let axisX = 0;

const hideControl = () => {
	if (axisY === -2040) {
		watchTopControl.classList.add("hideControl");
	} else {
		watchTopControl.classList.remove("hideControl");
	}
	if (axisY === 2040) {
		watchBottomControl.classList.add("hideControl");
	} else {
		watchBottomControl.classList.remove("hideControl");
	}
	if (axisX === -2080) {
		watchRightControl.classList.add("hideControl");
	} else {
		watchRightControl.classList.remove("hideControl");
	}
	if (axisX === 2080) {
		watchLeftControl.classList.add("hideControl");
	} else {
		watchLeftControl.classList.remove("hideControl");
	}
};

watchTopControl.addEventListener("click", () => {
	watchCases.style.marginTop = `${(axisY -= 510)}px`;
	hideControl();
});
watchBottomControl.addEventListener("click", () => {
	watchCases.style.marginTop = `${(axisY += 510)}px`;
	hideControl();
});
watchRightControl.addEventListener("click", () => {
	watchBands.style.marginRight = `${(axisX -= 520)}px`;
	hideControl();
});
watchLeftControl.addEventListener("click", () => {
	watchBands.style.marginRight = `${(axisX += 520)}px`;
	hideControl();
});

// end of section 4
