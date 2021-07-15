let date = new Date();
let screen = document.getElementById("screen").innerHTML = date;

function blank(){
    let a = document.getElementById("emailHere").value = "";
    alert("Thanks for Subscribing!");
}
function moreOne(){
    let b = document.getElementById("deleteMe");
    b.style.display = "none";
    let a = document.getElementById("moreOne");
    a.style.display = "block";
    let button = document.getElementById("btnntbLess");
    button.style.display = "inline";
    let buttonTwo = document.getElementById("btnntb");
    buttonTwo.style.display = "none";
}
function lessOne(){
    let b = document.getElementById("deleteMe");
    b.style.display = "block";
    let a = document.getElementById("moreOne");
    a.style.display = "none";
    let button = document.getElementById("btnntbLess");
    button.style.display = "none";
    let buttonTwo = document.getElementById("btnntb");
    buttonTwo.style.display = "inline";
}
//For inframe watch video in books page
function watch(){
    let bt = document.getElementById("forWatch");
    bt.style.display = "none";
    let close = document.getElementById("forPosition");
    close.style.display = "block";
    let video = document.getElementById("ThisHurt");
    video.style.display = "block";
}
function test(){
    let bt = document.getElementById("forWatch");
    bt.style.display = "block";
    let close = document.getElementById("forPosition");
    close.style.display = "none";
    let video = document.getElementById("ThisHurt");
    video.style.display = "none";
}
//Video Two
function watchTwo(){
    let bt = document.getElementById("forWatchTwo");
    bt.style.display = "none";
    let close = document.getElementById("forPositionTwo");
    close.style.display = "block";
    let video = document.getElementById("videoTwoHere");
    video.style.display = "block";
}

function testTwo(){
    let bt = document.getElementById("forWatchTwo");
    bt.style.display = "block";
    let close = document.getElementById("forPositionTwo");
    close.style.display = "none";
    let video = document.getElementById("videoTwoHere");
    video.style.display = "none";
}
//video Three
function noVideo(){
    let error = document.getElementById("noVideoText").innerHTML = "Oops! Something wrong."
}