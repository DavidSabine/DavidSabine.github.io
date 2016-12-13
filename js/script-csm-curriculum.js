function adjustLearningObjectives(arr) {
	for(n in arr[1]){
		var lo = document.getElementById(arr[1][n].lo).firstChild;
		var pw = percentwidth(lo);
		if(pw>99){alert("exceeded100");}
		if(arr[0]=="down"){
			lo.style.width = Math.min(100,parseFloat(pw) + arr[1][n].i) +'%';
		} else {
			lo.style.width = Math.max(1,parseFloat(pw) - arr[1][n].i) +'%';
		}
	}
}

function percentwidth(elem){
    var pa = elem.offsetParent || elem;
    return ((elem.offsetWidth/pa.offsetWidth)*100).toFixed(2);
}

var whenReady = (function() { // http://www.dyn-web.com/tutorials/init.php
	var funcs = [addDivsToLearningObjectives];
	var ready = false;
	function handler(e) {
		if (ready) return;
		if (e.type === "readystatechange" && document.readyState !== "complete")
			return;
		for(var i = 0; i < funcs.length; i++) 
			funcs[i].call(document);
		ready = true;
		funcs = null;
	}

	if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", handler, false);
		document.addEventListener("readystatechange", handler, false);
		window.addEventListener("load", handler, false);
	}
	else if (document.attachEvent) {
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

function makeSafeForCSS(name) {
	return name.replace(/[^a-z0-9]/g, function(s) {
		var c = s.charCodeAt(0);
		if (c == 32) return '-';
		if (c >= 65 && c <= 90) return s.toLowerCase();
		return '';
	});
}