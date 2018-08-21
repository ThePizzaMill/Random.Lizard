/*************************
 Authors: thepizzamill
 *************************/

var animalLocation = "lizards.json";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var lizardBase = JSON.parse(this.responseText).urls;
        /*
        var x;
        for (x in lizardBase) {
            console.log("LOGGED:  " + lizardBase[x]);
        }
        */
        var length = lizardBase.length;
        
       // console.log("lizardBase length :  Should be 2 : Is " + length);
        
        var randInt = parseInt(length * Math.random());
        
       // console.log("lizardBase fetch :  Fetching element " + randInt + "  :  Element retrieved?");
        
        var imageLocale = lizardBase[randInt];
        
      //  console.log(imageLocale);
      //  console.log(document.getElementById("lizhard").src);
        
        if (document.getElementsByTagName("title").innerHTML == "Random Lizard") {
            document.getElementById("lizhard").src = imageLocale;
        } else {
            document.getElementById("lizhook").innerHTML = imageLocale;
        }
    }
};

xmlhttp.open("GET", animalLocation, true);
xmlhttp.send();
