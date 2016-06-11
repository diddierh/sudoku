var timer = (function(){
	var interval = null;
	var miliseconds = 0;
	var timeUnit; // this is the minimum time in ms measured by this timer

	function increment(){
		if(timeUnit != undefined){
			miliseconds += timeUnit;
		}
		postMessage(miliseconds);
	}

	function setUnit(n){
		timeUnit = n;
	}

	function start(){
		if(interval == null){

			interval = setInterval(increment, timeUnit);
		}
	}

	function stop(){
		if(interval != undefined){
			clearInteval(interval)
		}
		interval = null;
		storageManager.save(miliseconds);
	}

	function set(n){
		miliseconds = n;
	}

	function reset(){
		miliseconds = 0;
	}

	function get(){
		return miliseconds;
	}

	return {
		setUnit:setUnit,
		start:	start,
		stop:	stop,
		reset:	reset,
		set:	set
	};
})();


onmessage = function(e){
	//POSSIBLE MESSAGES
	// - START it starts the counter just creates a new interval
	// - STOP it stops the counter deleting the interval
	// - RESET it resets the counter to 0
	switch(e.data[0]){
		case "START":
			timer.setUnit(100);
			timer.start();
			break;
		case "STOP":
			timer.stop();
			break;
		case "RESET":
			timer.reset();
			break;
		case "SET":
			timer.set(e.data[1]);
			break;
		default:
			console.log("unkwown message");
	}
};
