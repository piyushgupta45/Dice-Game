document.querySelector("button").addEventListener("click",function(){

var audio=new Audio("sound/dice-142528.mp3");
 audio.play();
var r=Math.floor(Math.random()*6)+1;
var a=Math.floor(Math.random()*6)+1;
var rdi="images/dice"+r+".png";
var rdi2="images/dice"+a+".png";
document.querySelectorAll("img")[0].setAttribute("src",rdi);
document.querySelectorAll("img")[1].setAttribute("src",rdi2);

if(r>a)
document.querySelector("h1").innerHTML="PLayer 1 wins";
if(r<a)
document.querySelector("h1").innerHTML="PLayer 2 wins";
if(r==a)
document.querySelector("h1").innerHTML="Draw";
});