var introductionslos = [
{"lo":"scrummaster-servant","i":2},
{"lo":"scrumroles-selforganizing","i":2}
];

var introductions = new Waypoint.Inview({
	element: document.querySelector('#introductions>article>ul:first-of-type'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,introductionslos];
			adjustLearningObjectives(arr);
			$.notify("TFTBOTR: Concept Centre",{ style:"info",position:"right middle" });
		};
	},
	exited: function(direction) {
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
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,welcomeintroductionslos];
			adjustLearningObjectives(arr);
			$.notify("TFTBOTR: Connector",{ style:"info",position:"right middle" });
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
{"lo":"scrumroles-selforganizing","i":5},
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
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,aboutscrumalliancecertificationslos];
			adjustLearningObjectives(arr);
		};  	
	}});

var classroomexpectationsforcertificationlos = [
{"lo":"scrumfoundations","i":1},
{"lo":"scrumfoundations-sprinttimeboxed","i":8},
{"lo":"sprinttimeboxed-whatisatimebox","i":2},
{"lo":"scrumfoundations-scrumvalues","i":4},
{"lo":"scrumroles-scrummaster","i":2},
{"lo":"scrummaster-responsibilities","i":2},
{"lo":"scrummaster-processresponsibilities","i":2},
{"lo":"scrummaster-changeagent","i":1},
{"lo":"scrummaster-removesimpediments","i":4},
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
			$.notify("Interactive Discussion",{ style:"info",position:"right middle" });
		};
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,classroomexpectationsforcertificationlos];
			adjustLearningObjectives(arr);
		};  	
	}});

var productdevelopmentsimulationoverview1los = [
{"lo":"generalknowledge","i":20},
{"lo":"scrumfoundations","i":2},
{"lo":"scrumfoundations-empericalprocesses","i":5},
{"lo":"scrumfoundations-sprintIID","i":12},
{"lo":"scrumfoundations-sprinttimeboxed","i":15},
{"lo":"sprinttimeboxed-whatisatimebox","i":45},
{"lo":"sprinttimeboxed-sprintduration","i":20},
{"lo":"scrumfoundations-signficanceofdone","i":5},
{"lo":"signficanceofdone-potentiallyreleasable","i":10},
{"lo":"scrumroles","i":20},
{"lo":"scrummaster-processresponsibilities","i":15},
{"lo":"scrummaster-removesimpediments","i":2},
{"lo":"scrumroles-productowner","i":2},
{"lo":"productowner-responsibilities","i":5},
{"lo":"productowner-collaborateswithteam","i":2},
{"lo":"productowner-collaborateswithstakeholders","i":2},
{"lo":"productowner-participatesinsprintreview","i":10},
{"lo":"scrumroles-team","i":5},
{"lo":"scrumroles-selforganizing","i":5},
{"lo":"scrumroles-delivers","i":2},
{"lo":"scrumroles-participatesinsprint","i":2},
{"lo":"scrumroles-teamwork","i":10},
{"lo":"scrumroles-impactontraditionalroles","i":3},
{"lo":"impactontraditionalroles-projectmanager","i":3},
{"lo":"impactontraditionalroles-specialists","i":2},
{"lo":"scrumevents","i":50},
{"lo":"scrumevents-planning","i":40},
{"lo":"scrumevents-daily","i":40},
{"lo":"scrumevents-review","i":40},
{"lo":"scrumevents-retrospective","i":40},
{"lo":"scrumartifacts","i":2},
{"lo":"scrumartifacts-increment","i":5},
{"lo":"increment-definition","i":5},
{"lo":"increment-potentiallyreleasable","i":5}
];

var sprint1increment = new Waypoint.Inview({
	element: document.querySelector('#product-development-simulation-overview h2:first-of-type'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,productdevelopmentsimulationoverview1los];
			adjustLearningObjectives(arr);
		};
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,productdevelopmentsimulationoverview1los];
			adjustLearningObjectives(arr);
		};  	
	}});

var productdevelopmentsimulationoverview2los = [
{"lo":"generalknowledge","i":2},
{"lo":"scrumfoundations","i":2},
{"lo":"scrumfoundations-sprintIID","i":5},
{"lo":"signficanceofdone-potentiallyreleasable","i":5},
{"lo":"scrumfoundations-applicability","i":10},
{"lo":"scrumroles","i":3},
{"lo":"productowner-responsibilities","i":2},
{"lo":"productowner-success","i":5},
{"lo":"productowner-vision","i":10},
{"lo":"productowner-ownsthebacklog","i":2},
{"lo":"productowner-collaborateswithteam","i":10},
{"lo":"productowner-participatesinsprintreview","i":2},
{"lo":"productowner-authority","i":20},
{"lo":"productowner-singleproductowner","i":5},
{"lo":"productowner-organizationalrespect","i":5},
{"lo":"scrumroles-team","i":10},
{"lo":"scrumroles-responsibilities","i":15},
{"lo":"scrumroles-delivers","i":10},
{"lo":"scrumroles-authority","i":10},
{"lo":"scrumroles-characteristics","i":2},
{"lo":"scrumroles-impactontraditionalroles","i":2},
{"lo":"impactontraditionalroles-projectmanager","i":5},
{"lo":"increment-potentiallyreleasable","i":10},
{"lo":"scrumartifacts-transparency","i":5}
];

var sprint1increment = new Waypoint.Inview({
	element: document.querySelector('#product-development-simulation-overview h2:nth-of-type(2)'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,productdevelopmentsimulationoverview2los];
			adjustLearningObjectives(arr);
			$.notify("Role play: Customer & Team",{ style:"info",position:"right middle" });
		};
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,productdevelopmentsimulationoverview2los];
			adjustLearningObjectives(arr);
		};  	
	}});

var productdevelopmentsimulationoverview3los = [
{"lo":"generalknowledge","i":2},
{"lo":"scrumfoundations","i":30},
{"lo":"scrumfoundations-empericalprocesses","i":5},
{"lo":"scrumfoundations-scrumvalues","i":20},
{"lo":"scrumroles","i":10},
{"lo":"scrumroles-scrummaster","i":15},
{"lo":"scrummaster-responsibilities","i":50},
{"lo":"scrummaster-changeagent","i":15},
{"lo":"scrummaster-servant","i":5},
{"lo":"scrummaster-coach","i":2},
{"lo":"scrummaster-guidestheteam","i":2},
{"lo":"scrumroles-productowner","i":5},
{"lo":"productowner-collaborateswithteam","i":3},
{"lo":"productowner-authority","i":2},
{"lo":"productowner-constraints","i":15},
{"lo":"scrumroles-team","i":10},
{"lo":"scrumroles-responsibilities","i":30},
{"lo":"scrumroles-selforganizing","i":50},
{"lo":"scrumroles-delivers","i":10},
{"lo":"scrumroles-teamwork","i":20},
{"lo":"scrumroles-impactontraditionalroles","i":40},
{"lo":"impactontraditionalroles-projectmanager","i":40},
{"lo":"impactontraditionalroles-specialists","i":20},
{"lo":"sprintbacklog-responsibility","i":5}
];

var sprint1increment = new Waypoint.Inview({
	element: document.querySelector('#product-development-simulation-overview h2:nth-of-type(3)'),
	entered: function(direction) {
		if(direction=="down") {
			var arr = [direction,productdevelopmentsimulationoverview3los];
			adjustLearningObjectives(arr);
		};
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,productdevelopmentsimulationoverview3los];
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
	},
	exited: function(direction) {
		if(direction=="up") {
			var arr = [direction,sprint1incrementlos];
			adjustLearningObjectives(arr);
		};  	
	}});