		function getTwoDigitNumber(number){
			if(number < 10){
				number = "0" + number;
			}
			return number;

		}

		function getPrintableTime(seconds){
			var hours;
			var minutes;
			var secs;

			secs	= seconds - Math.floor(seconds/60)*60;
			minutes	= Math.floor(seconds/60)%60;
			hours = Math.floor(seconds/3600);
			
			return getTwoDigitNumber(hours) + ":" + getTwoDigitNumber(minutes) + ":" + getTwoDigitNumber(secs);
		}

		var timer = (function(){
			var seconds = 0;


			function inc(){
				seconds++;
				return seconds;
			}

			function reset(){
				return seconds = 0;
			}

			function set(number){
				seconds = number;
			}

			return {
				increment:	inc,
				reset:		reset,
				set:		set
			};
		})();

		window.onload = function(){
			var s = localStorage.getItem("timer") || 0;
			timer.set(s);
		}

		window.onunload = function(){
			localStorage.setItem("timer",timer.increment());
		}

		setInterval(count, 10);

		function count(){
			var t = document.getElementsByClassName("count")[0];
			t.innerHTML = getPrintableTime(Math.floor(timer.increment()/100));

		};
