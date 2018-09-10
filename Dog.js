/*************************
 Authors: thepizzamill
 *************************/

var animalLocation = "dogs.json";

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var dogBase = JSON.parse(this.responseText).urls;
        /*
        var x;
        for (x in dogBase) {
            console.log("LOGGED:  " + dogBase[x]);
        }
        */
        var length = dogBase.length;
        
       // console.log("dogBase length :  Should be 1 : Is " + length);
        
        var randInt = parseInt(length * Math.random());
        
       // console.log("dogBase fetch :  Fetching element " + randInt + "  :  Element retrieved?");
        
        var imageLocale = dogBase[randInt];
        
      //  console.log(imageLocale);
      //  console.log(document.getElementById("doge").src);
        
        try {
            document.getElementById("doge").src = imageLocale;
            console.log(imageLocale);
        } catch (err) {
            //console.log(err);
            document.getElementById("doge").innerHTML = imageLocale;
        }
    }
};

xmlhttp.open("GET", animalLocation, true);
xmlhttp.send();
