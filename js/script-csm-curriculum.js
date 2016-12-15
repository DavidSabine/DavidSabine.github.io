var initnotifications = new Waypoint.Inview({
	element: document.querySelector("body>header>h1"),
	exit: function(direction) {
		if(direction=="down") {
			$.notify("Training techniques will appear here. (TFTBOTR & others)",{ style:"info",position:"right middle","autoHideDelay": 2000 });
		};
	},
	entered: function(direction) {
		if(direction=="up") {
			var arr = [direction,null];
			adjustLearningObjectives(arr);
		};
	}});

function addNotifyStyles() {
	$.notify.addStyle('info', {
		html: "<div><span data-notify-text/></div>",
		classes: {
			base: {
				"white-space": "nowrap",
				"padding": "2vmin 4vmin 2vmin 4vmin",
				"background": "#61b8db",
				"background-image": "linear-gradient(to bottom, rgba(97, 184, 219, 0), rgba(48, 141, 196, 1))",
				"box-shadow": "inset 0 0 0 0.05em #135c86, inset 0 0.1em 0.05em 0 rgba(255, 255, 255, 0.75)",
				"color": "#fff",
				"font-weight": "700",
				"border-radius": "0.5em",
				"opacity": "0.9",
				"text-shadow": "-0.05em -0.05em 0.02em rgba(0, 0, 0, 0.5)"
			}
		}
	});
}

function adjustLearningObjectives(arr) {
	if(arr[1]===null) {
		return resetDivsToLearningObjectives();
	}
	for (n in arr[1]) {
		var lo = document.getElementById(arr[1][n].lo).firstChild;
		var pw = percentwidth(lo);
		if (pw > 99) {
			alert("exceeded100");
		}
		if (arr[0] == "down") {
			lo.style.width = Math.min(100, parseFloat(pw) + arr[1][n].i) + '%';
		} else {
			lo.style.width = Math.max(1, parseFloat(pw) - arr[1][n].i) + '%';
		}
	}
}

function percentwidth(elem) {
	var pa = elem.offsetParent || elem;
	return ((elem.offsetWidth / pa.offsetWidth) * 100).toFixed(2);
}

var whenReady = (function() { // http://www.dyn-web.com/tutorials/init.php
	var funcs = [addDivsToLearningObjectives, addNotifyStyles];
	var ready = false;

	function handler(e) {
		if (ready) return;
		if (e.type === "readystatechange" && document.readyState !== "complete")
			return;
		for (var i = 0; i < funcs.length; i++)
			funcs[i].call(document);
		ready = true;
		funcs = null;
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", handler, false);
		document.addEventListener("readystatechange", handler, false);
		window.addEventListener("load", handler, false);
	} else if (document.attachEvent) {
		document.attachEvent("onreadystatechange", handler);
		window.attachEvent("onload", handler);
	}

	return function whenReady(f) {
		if (ready) f.call(document);
		else funcs.push(f);
	}
}());

function addDivsToLearningObjectives() {
	var learningobjectives = document.querySelectorAll("ul#learningobjectives li");
	for (i = 0; i < learningobjectives.length; i++) {
		var div = document.createElement("DIV");
		learningobjectives[i].insertBefore(div, learningobjectives[i].childNodes[0]);
	}
}

function resetDivsToLearningObjectives() {
	var learningobjectivesdiv = document.querySelectorAll("ul#learningobjectives li>div");
	for (i = 0; i < learningobjectivesdiv.length; i++) {
		learningobjectivesdiv[i].style.width = "1%";
	}
}

function makeSafeForCSS(name) {
	return name.replace(/[^a-z0-9]/g, function(s) {
		var c = s.charCodeAt(0);
		if (c == 32) return '-';
		if (c >= 65 && c <= 90) return s.toLowerCase();
		return '';
	});
}