/*************************
 Authors: thepizzamill
 *************************/

var animalLocation = "lizards.json";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var lizardBase = JSON.parse(this.responseText);
        
        //console.log("lizardBase length :  Should be 2 : Is " + lizardBase.length);
        
        var randInt = parseInt(lizardBase.length * Math.random());
        
        //console.log("lizardBase fetch :  Fetching element " + randInt + "  :  Element retrieved?");
        
        var imageLocale = lizardBase.urls[randInt];
        
        //console.log(imageLocale);
        //console.log(document.getElementById("lizhard").src);
        
        document.getElementById("lizhard").src = imageLocale;
    }
};

xmlhttp.open("GET", "lizards.json", true);
xmlhttp.send();
