/*************************
 Authors: thepizzamill
 *************************/

var animalLocation = "cats.json";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var catBase = JSON.parse(this.responseText).urls;
        /*
        var x;
        for (x in catBase) {
            console.log("LOGGED:  " + catBase[x]);
        }
        */
        var length = catBase.length;
        
       // console.log("catBase length :  Should be 1 : Is " + length);
        
        var randInt = parseInt(length * Math.random());
        
       // console.log("catBase fetch :  Fetching element " + randInt + "  :  Element retrieved?");
        
        var imageLocale = catBase[randInt];
        
      //  console.log(imageLocale);
      //  console.log(document.getElementById("kit").src);
        
        try {
            document.getElementById("kit").src = imageLocale;
            console.log(imageLocale);
        } catch (err) {
            //console.log(err);
            document.getElementById("kit").innerHTML = imageLocale;
        }
    }
};

xmlhttp.open("GET", animalLocation, true);
xmlhttp.send();
