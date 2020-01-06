  var user = {
        name: "James Rotunda",
        image: "img/james1.jpg",
        progress: 0.25
    }

    var courseArr = [{
            title: "Engineering Bridges",
            subject: "Fluids Application"
        }, {
            title: "Theory of Numbers",
            subject: "Mathematics"
        }, {
            title: "Mechanical Engineering",
            subject: "Thermal and Mechanical systems"
        }];

    var activityArr = [{
            title: "Completed Fluids Quiz",
            subject: "Submitted for review 1/11/20 at 10:39PM"
        }, {
            title: "Commented in MATH104 Tuesday Discussion Group",
            subject: "Why are numbers so Difficult to Work With?"
        }, {
            title: "Enrolled in ME 401",
            subject: "course begins 1/15/20"
        }];

    var accountArr = [{
            title: "Enrolled since: ",
            subject: "9/06/2017"
        }, {
            title: "Enrollment Status: ",
            subject: "Active Student"
        }, {
            title: "Department",
            subject: "Engineering"
        }];



function setUser(user, image, name, id) {
	image.src = user.image;
	image.alt = user.name;
	name.innerText = user.name;
	id.innerText = "User #: " + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
	}

	setUser(user, document.getElementById("userImg"), document.getElementById("username"), document.getElementById('userId'));


function getTime(){

var now = new Date();
var hh = formatTime(now.getHours());
var mm = formatTime(now.getMinutes());
var ss = formatTime(now.getSeconds());
var month = formatTime(now.getMonth() +1);
var day = formatTime(now.getDate());
var year = formatTime(now.getFullYear()-2000);
return month + "/" + day + "/" + year + "    |   " + hh + ":"+ mm + ":" + ss
}

function formatTime(timeDenom) {
	if(timeDenom <10) {
		return "0" + timeDenom;
	} else {
		return timeDenom;
	}
}


function setTime(el) {
	el.style.whiteSpace = "pre"
	el.innerText = getTime();
	var elem = el;
	setTimeout(function() {
		return setTime(elem);
	}, 1000)
}

setTime(document.getElementById("time"));


function setProgress (user, bar, percent) {
	bar.style.width = user.progress * 100 + "%";
	percent.innerText = user.progress * 100 + "%";
}

setProgress(user, document.getElementById("progress-inner"), document.getElementById("progress-percent"))




function setActive(arr, title, list, str){
	title.innerText = str
	list.innerHTML = ""
	for(var i=0; i<arr.length; i++) {
		list.innerHTML += "<li><h4>" + arr[i].title + "</h4><p>" + arr[i].subject + "</p></li>"
	}
}

setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses:  ")



// using the buttons
function showCourses () {
	setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "MyCourses:  ");
}

function showActivity (){
	setActive(activityArr, document.getElementById("active-title"), document.getElementById("active-list"), "Recent Activity:  ");
}


function showAccount (){
	setActive(accountArr, document.getElementById("active-title"), document.getElementById("active-list"), "Account Activity:  ");
}






function expandMenu() {
	if(document.getElementsByTagName("main")[0].style.width) {
		document.getElementsByTagName("main")[0].style = "";
		document.getElementsByTagName("nav")[0].className = "";
	} else {
		document.getElementsByTagName("main")[0].style = "padding: 30px 5vw;; width: 75vw";
		document.getElementsByTagName("nav")[0].className = "open";
	}
}







