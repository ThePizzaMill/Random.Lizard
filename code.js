
function getLizard () {
    var lizardBase = [];
    lizardBase.push("http://api.ning.com/files/UZ57-5HN3sbQY6PHfzH2293AnrPFVjwk-MPCkFjmPmSYYFnt2yNBjJqAQ8bu68JRfaRMsQpTahsVdRn5uIEEqyQ**7*raaFP/GreenLizards.jpg");
    lizardBase.push("http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg");
	// lizardBase.push("");

	//console.log("lizardBase length :  Should be 2 : Is " + lizardBase.length);

	var randInt = parseInt(lizardBase.length * Math.random());

	//console.log("lizardBase fetch :  Fetching element " + randInt + "  :  Element retrieved?");

	var imageLocale = lizardBase[randInt];

	//console.log(imageLocale);
	//console.log(document.getElementById("lizhard").src);

	document.getElementById("lizhard").src = imageLocale;
}

$(document).ready(getLizard);