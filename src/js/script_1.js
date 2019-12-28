document.addEventListener("DOMContentLoaded", () => {
//create variable with starting time
	let startTime = (new Date().getHours()+8)%24;
//check if user in page at 00 minutes
	if(new Date().getMinutes() == 0) {
		myScript();
	}
//call looping function
	checkTime();
//looping function	
	function checkTime(){
	   	let date = new Date();
//check if minutes on zero and hours counted to startTime  	
		if(date.getMinutes() == 0 && date.getHours() == startTime){
			startTime = (startTime + 8)%24;
			changeBg();
		}
//adding setTimeout function, it checking every 1 min if condition is correct  		
		setTimeout(checkTime, 10000);
	}
//changing background
	function changeBg(){
//making random number		
		let min = 1,
			max = 3,
			random = Math.floor(Math.random() * (+max - +min)) + +min,
//adding it to element
			background = 'url("../img/background-'+ random + '.jpg")',
			countBg = document.getElementsByClassName('container')[0];

			countBg.style.backgroundImage = background;
	}

});