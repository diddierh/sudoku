var myWorker;
var time;

function getTwoDigitNumber(number){
	if(number < 10){
		number = "0" + number;
	}
	return number;

}

function getPrintableTime(miliseconds){
	var seconds = Math.floor(miliseconds / 1000)
	var hours;
	var minutes;
	var secs;

	secs	= seconds - Math.floor(seconds/60)*60;
	minutes	= Math.floor(seconds/60)%60;
	hours = Math.floor(seconds/3600);
	
	return getTwoDigitNumber(hours) + ":" + getTwoDigitNumber(minutes) + ":" + getTwoDigitNumber(secs);
}


var storageManager = (function(){
	function save(value){
		localStorage.setItem("ms", value);
	}
	function load(){
		if(localStorage.getItem("ms") != null){
			return Number(localStorage.getItem("ms"));
		}
		else{
			return 0;
		}
	}

	return {
		save: save,
		load: load
	};
})();

window.onload = function(){
	myWorker = new Worker("js/worker-timer.js");

	time = storageManager.load();
	var timerElement = document.getElementsByClassName("count")[0];
	timerElement.innerHTML = getPrintableTime(time);
	
	myWorker.postMessage(["SET", time]);

	myWorker.onmessage = function(e){
		time = e.data;
		timerElement.innerHTML = getPrintableTime(time);
	}

	myWorker.postMessage(["START"]);

	window.onunload = function(){
		storageManager.save(time);
		myWorker.postMessage(["STOP"]);
	}
};

