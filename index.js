
var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomDiceiamge="dice"+randomNumber1+".png";
var randomImageSourec="i/"+randomDiceiamge;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSourec);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceiamge1="dice"+randomNumber2+".png";
var randomImageSourec2="i/"+randomDiceiamge1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSourec2);


if (randomNumber1>randomNumber2) {
  document.querySelector("h2").innerHTML="Player 1 wins!!!";

}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h2").innerHTML="Player 2 wins!!!";
}
else {
  document.querySelector("h2").innerHTML="Draw ";
  document.querySelector("h2").innerHTML.style.color="red";

}
