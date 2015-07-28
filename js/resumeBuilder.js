var formattedName = HTMLheaderName.replace('%data%', 'Brian Neaves');
var formattedRole = HTMLheaderRole.replace('%data%', 'Web Developer');
$("#header").append(formattedName);
$("#header").append(formattedRole);
 
var projects = {
	"proj" : [
		{
			"title" : "Personal Website",
			"dates" : "2015",
			"description" : "Made personal website using responsive design techniques",
			"im" : "images/picofportfolio.png"
		}
	]
}

var bio = {
	"name" : "Brian Neaves",
	"role" : "Web Developer",
	"location" : "Atlanta, GA",
	"contacts" : {
		"mobile" : "404 486 5877",
		"email" : "brian.g.neaves@gmail.com",
		"github" : "blink2ce",
		"twitter" : "@briangneaves",
		"location" : "Atlanta, GA"
	},
	"welcomemessage": "Welcome to my resume!",
	"skills" : ["Front End Web Development", "Good Conversation", "Vegan Cooking"],
	"bioPic" : "images/BrianProfile.jpg"
}


var work = {
	"jobs" : [
		{
			"employer": "AT&T",
			"title": "database curator/lease manager",
			"dates": "June 2014 - Present",
			"location" : "Atlanta, GA",
			"Description": "Manage a lease billing record database of fiber and cable with ~$8M yearly expenditure"
		},
		{
			"employer": "ISIS Vanderbilt",
			"title": "Research Engineer Intern",
			"dates": "May 2012 - August 2012",
			"location" : "Nashville, TN",
			"Description": "Write functional models of automobile parts in modeling language called Modelica"	
		}
	]
}
 
var education = {
	"Schools" : [
	 	{
	 		"name":"Vanderbilt University",
	 		"city":"Nashville",
	 		"major":"Electrical Engineering",
	 		"minor":"N/A",
	 		"Dates":"2010 - 2014  "
	 	}
 	],
 	"onlineCourses":[
	 	{
	 		"title": "Udacity Front End Web Development Nanodegree",
	 		"dates" :"2015"
	 	},
	 	{	"title" : "Coursera: Internet History, Technology and Security",
	 		"dates" : "June 2014"
	 	},
	 	{
	 		"title" : "Coursera : Usable Security",
	 		"dates" : "September 2014"
	 	}
 	]
 }

projects.display = function(){
	for (p in projects.proj){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.proj[p].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.proj[p].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.proj[p].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.proj[p].im);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
	}
}

projects.display();

bio.display = function(){
	if(bio.skills.length > 0) {
	 	$("#header").append(HTMLskillsStart);
	 	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	 	$("#skills").append(formattedBioPic);
	 	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	 	$("#skills").append(formattedSkill);
	 	var formattedSkill2 = HTMLskills.replace('%data%', bio.skills[1]);
	 	$("#skills").append(formattedSkill2);
	 	var formattedSkill3 = HTMLskills.replace('%data%', bio.skills[2]);
	 	$("#skills").append(formattedSkill3);

  	}
}

bio.display();

work.display = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedJobTitle = formattedJob + formattedTitle;
		$(".work-entry:last").append(formattedJobTitle);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].Description);
		$(".work-entry:last").append(formattedWorkDescription);	
	}
}

work.display();

education.display = function(){
	for(school in education.Schools){
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", education.Schools[school].name);
		$(".education-entry:last").append(schoolName);
		var degreeName = HTMLschoolDegree.replace("%data%", education.Schools[school].major);
		$(".education-entry:last").append(degreeName);
		var dates = HTMLschoolDates.replace("%data%", education.Schools[school].Dates);
		$(".education-entry:last").append(dates);
		var cityName = HTMLschoolLocation.replace("%data%", education.Schools[school].city);
		$(".education-entry:last").append(cityName);

	}
}

education.display();

$("#map-div").append(googleMap);