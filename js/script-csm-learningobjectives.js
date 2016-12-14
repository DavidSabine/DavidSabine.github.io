var introductionslos = [
{"lo":"scrummaster-servant","i":2},
{"lo":"scrumroles-selforganizing","i":2}
];

var introductions = new Waypoint.Inview({
	element: document.getElementById('introductions'),
	exited: function(direction) {
		if(direction=="down") {
			var arr = [direction,introductionslos];
			adjustLearningObjectives(arr);
		};  	
	},
	entered: function(direction) {
		if(direction=="up") {
			var arr = [direction,introductionslos];
			adjustLearningObjectives(arr);
		};  	
	}});


var welcomeintroductionslos = [
{"lo":"generalknowledge","i":1},
{"lo":"scrumfoundations","i":1},
{"lo":"scrumfoundations-sprinttimeboxed","i":1},
{"lo":"scrumfoundations-scrumvalues","i":1},
{"lo":"scrumroles-teamwork","i":2},
{"lo":"scrumroles-responsibilities","i":1},
{"lo":"scrumroles-impactontraditionalroles","i":1},
{"lo":"impactontraditionalroles-projectmanager","i":1}
];

var welcomeintroductions = new Waypoint.Inview({
	element: document.getElementById('welcome--introductions'),
	exit: function(direction) {
		if(direction=="down") {
			var arr = [direction,welcomeintroductionslos];
			adjustLearningObjectives(arr);
		};  	
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,welcomeintroductionslos];
			adjustLearningObjectives(arr);
		};  	
	}});


var aboutscrumalliancecertificationslos = [
{"lo":"generalknowledge","i":1},
{"lo":"scrumfoundations","i":1},
{"lo":"scrumroles","i":2},
{"lo":"scrumroles-scrummaster","i":2},
{"lo":"scrummaster-responsibilities","i":1},
{"lo":"scrummaster-changeagent","i":1},
{"lo":"scrummaster-servant","i":1},
{"lo":"scrummaster-coach","i":1},
{"lo":"scrumroles-productowner","i":2},
{"lo":"productowner-responsibilities","i":1},
{"lo":"productowner-ownsthebacklog","i":1},
{"lo":"productowner-collaborateswithteam","i":3},
{"lo":"scrumroles-team","i":1},
{"lo":"scrumroles-responsibilities","i":1},
{"lo":"scrumroles-selforganizing","i":1},
{"lo":"scrumroles-delivers","i":1},
{"lo":"scrumroles-impactontraditionalroles","i":1},
{"lo":"impactontraditionalroles-projectmanager","i":3},
{"lo":"impactontraditionalroles-specialists","i":3}
];

var aboutscrumalliancecertifications = new Waypoint.Inview({
	element: document.getElementById('about-scrum-alliance-certifications'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,aboutscrumalliancecertificationslos];
			adjustLearningObjectives(arr);
		};
		$.notify("Blah blah blah",{ style:"info",position:"right middle" });
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,aboutscrumalliancecertificationslos];
			adjustLearningObjectives(arr);
		};  	
	}});

var classroomexpectationsforcertificationlos = [
{"lo":"scrumfoundations","i":1},
{"lo":"scrumfoundations-sprinttimeboxed","i":2},
{"lo":"sprinttimeboxed-whatisatimebox","i":2},
{"lo":"scrumfoundations-scrumvalues","i":2},
{"lo":"scrumroles-scrummaster","i":2},
{"lo":"scrummaster-responsibilities","i":2},
{"lo":"scrummaster-processresponsibilities","i":2},
{"lo":"scrummaster-changeagent","i":1},
{"lo":"scrummaster-removesimpediments","i":2},
{"lo":"scrummaster-coach","i":2},
{"lo":"scrummaster-protectstheteam","i":2},
{"lo":"scrummaster-authority","i":1},
{"lo":"scrumroles-team","i":1},
{"lo":"scrumroles-responsibilities","i":1},
{"lo":"scrumroles-participatesinsprint","i":1},
{"lo":"scrumroles-teamwork","i":1}
];

var classroomexpectationsforcertification = new Waypoint.Inview({
	element: document.getElementById('classroom-expectations-for-certification'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,classroomexpectationsforcertificationlos];
			adjustLearningObjectives(arr);
		};
		$.notify("Expecations for Certification",{ style:"info",position:"right middle" });
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,classroomexpectationsforcertificationlos];
			adjustLearningObjectives(arr);
		};  	
	}});

var sprint1incrementlos = [
{"lo":"generalknowledge","i":1},
{"lo":"generalknowledge-agilemanifesto","i":0},
{"lo":"scrumfoundations","i":1},
{"lo":"scrumfoundations-empericalprocesses","i":2},
{"lo":"scrumfoundations-sprintIID","i":5},
{"lo":"scrumfoundations-sprintprotected","i":1},
{"lo":"scrumfoundations-sprinttimeboxed","i":10},
{"lo":"sprinttimeboxed-whatisatimebox","i":5},
{"lo":"sprinttimeboxed-sprintduration","i":1},
{"lo":"scrumfoundations-signficanceofdone","i":5},
{"lo":"signficanceofdone-potentiallyreleasable","i":5},
{"lo":"scrumfoundations-scrumvalues","i":1},
{"lo":"scrumfoundations-applicability","i":1},
{"lo":"scrumroles","i":3},
{"lo":"scrumroles-scrummaster","i":3},
{"lo":"scrummaster-responsibilities","i":2},
{"lo":"scrummaster-processresponsibilities","i":2},
{"lo":"scrummaster-changeagent","i":3},
{"lo":"scrummaster-removesimpediments","i":3},
{"lo":"scrummaster-servant","i":5},
{"lo":"scrummaster-coach","i":2},
{"lo":"scrummaster-protectstheteam","i":4},
{"lo":"scrummaster-guidestheteam","i":2},
{"lo":"scrummaster-authority","i":2},
{"lo":"scrumroles-productowner","i":2},
{"lo":"productowner-responsibilities","i":1},
{"lo":"productowner-success","i":2},
{"lo":"productowner-vision","i":3},
{"lo":"productowner-ownsthebacklog","i":1},
{"lo":"productowner-collaborateswithteam","i":3},
{"lo":"productowner-collaborateswithstakeholders","i":1},
{"lo":"productowner-participatesinsprintreview","i":3},
{"lo":"productowner-authority","i":2},
{"lo":"productowner-constraints","i":1},
{"lo":"productowner-singleproductowner","i":1},
{"lo":"productowner-organizationalrespect","i":1},
{"lo":"scrumroles-team","i":3},
{"lo":"scrumroles-responsibilities","i":3},
{"lo":"scrumroles-selforganizing","i":15},
{"lo":"scrumroles-delivers","i":10},
{"lo":"scrumroles-sprintbacklog","i":2},
{"lo":"scrumroles-participatesinsprint","i":10},
{"lo":"scrumroles-authority","i":4},
{"lo":"scrumroles-teamwork","i":10},
{"lo":"scrumroles-characteristics","i":2},
{"lo":"scrumroles-impactontraditionalroles","i":10},
{"lo":"impactontraditionalroles-projectmanager","i":10},
{"lo":"impactontraditionalroles-specialists","i":10},
{"lo":"scrumevents","i":3},
{"lo":"scrumevents-planning","i":10},
{"lo":"scrumevents-daily","i":15},
{"lo":"scrumevents-review","i":15},
{"lo":"scrumevents-retrospective","i":15},
{"lo":"scrumartifacts","i":3},
{"lo":"scrumartifacts-productbacklog","i":1},
{"lo":"productbacklog-definition","i":1},
{"lo":"productbacklog-contents","i":1},
{"lo":"productbacklog-refinement","i":1},
{"lo":"productbacklog-responsibility","i":2},
{"lo":"productbacklog-readiness","i":5},
{"lo":"productbacklog-estimation","i":1},
{"lo":"scrumartifacts-increment","i":4},
{"lo":"increment-definition","i":10},
{"lo":"increment-potentiallyreleasable","i":10},
{"lo":"increment-definitionofdone","i":2},
{"lo":"increment-understandingdone","i":8},
{"lo":"scrumartifacts-sprintbacklog","i":1},
{"lo":"sprintbacklog-definition","i":1},
{"lo":"sprintbacklog-purpose","i":1},
{"lo":"sprintbacklog-transparency","i":1},
{"lo":"sprintbacklog-responsibility","i":2},
{"lo":"sprintbacklog-updatescope","i":1},
{"lo":"sprintbacklog-updatefrequency","i":0},
{"lo":"scrumartifacts-transparency","i":2},
{"lo":"transparency-workremaining","i":0},
{"lo":"transparency-sprintburndown","i":0},
{"lo":"transparency-releaseburndown","i":0}
];

var sprint1increment = new Waypoint.Inview({
	element: document.getElementById('sprint-1-increment'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,sprint1incrementlos];
			adjustLearningObjectives(arr);
		};
		$.notify("Sprint 1 - Increment",{ style:"info",position:"right middle" });
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,sprint1incrementlos];
			adjustLearningObjectives(arr);
		};  	
	}});