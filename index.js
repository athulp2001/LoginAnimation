var appDiv = document.querySelector(".appdiv");
var reg = document.querySelector(".reg");
var isMoved = false;

function btnclick1() {
    if (isMoved) {
        
        appDiv.style.left = "0px";
    } else {
        
        appDiv.style.left = "300px";
    }
  
    isMoved = !isMoved;
}
//next button
var appDiv = document.querySelector(".appdiv");
var login = document.querySelector(".login");
var isMoved = false;

function btnclick2() {
    if (isMoved) {
        
        appDiv.style.left = "0px";
    } else {
        
        appDiv.style.left = "300px";
    }
  
    isMoved = !isMoved;
}

// var appName=document.querySelector(".appdiv1")
// var login=document.querySelector(".login")

// function btnclick2(){
  
//     var appdiv1 = document.querySelector(".appdiv1");
//     appdiv1.style.animation = 'moveLeft 1s forwards';
//     appdiv1.style.left = "-300px";
// }






