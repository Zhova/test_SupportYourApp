const COMMON_HOUR_MILLIS = 1000 * 60 * 60;
const BG_CHANGE_INTERVAL = 8 * COMMON_HOUR_MILLIS;

document.addEventListener("DOMContentLoaded", () => {

//changing background
	function changeBg() {
//making random number		
		let min = 1,
			max = 3,
			random = Math.floor(Math.random() * (max - min)) + min,
//adding it to element
			background = 'url("../img/background-'+ random + '.jpg")',
			countBg = document.getElementsByClassName('container')[0];
			countBg.style.backgroundImage = background;
	}

	setInterval(changeBg, BG_CHANGE_INTERVAL);

});