var randomnumber1  = Math.floor( Math.random() * 6) +1;
var RandomDiceImage = "dice" + randomnumber1 + ".png";
var randomDiceSource = "images/" + RandomDiceImage; 
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",randomDiceSource);

var randomNumber2 = Math.floor(Math.random() *6) +1;
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceSource2);

if(randomnumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}



