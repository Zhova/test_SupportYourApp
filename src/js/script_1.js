const common_hour_millis = 1000 * 60 * 60;
// const bg_change_interval = 8 * common_hour_millis;
const bg_change_interval = 5000;


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

	const day_parts = {
		    morning: 'morning',
		    midday: 'midday',
		    night: 'night',
		    default: 'default'
		}
		
	const getTimeInterval = (h) => {
		const hour = h === 0 ? 0 : (h || new Date().getHours());
	
		if (hour >= 0 && hour < 8) {
			return day_parts.morning;
		} else if (hour >= 8 && hour < 16) {
			return day_parts.midday;
		} else if (hour >= 16 && hour < 24) {
			return day_parts.night;
		}
		return day_parts.default;
	};
	
	const getImagePathForTimePeriod = (arg) => {
		if (arg === day_parts.morning) {
			return changeBg();
		} else if (arg === day_parts.midday) {
			return changeBg();
		} else if (arg === day_parts.night) {
			return changeBg();
		} else if (arg === day_parts.default) {
			return changeBg();
		}
		return undefined;
	};



// !!!!!!! If you need checkpoint from the user entrance - use this code

// //changing background
// 		function changeBg() {
// //making random number		
// 			let min = 1,
// 				max = 3,
// 				random = Math.floor(Math.random() * (max - min)) + min,
// //adding it to element
// 				background = 'url("../img/background-'+ random + '.jpg")',
// 				countBg = document.getElementsByClassName('container')[0];
// 				countBg.style.backgroundImage = background;
// 		}
	
// 		setInterval(changeBg, bg_change_interval);


});





