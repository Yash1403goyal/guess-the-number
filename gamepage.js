// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
playername=localStorage.getItem("player_name");
// count of attempts
// until hit
  var guess=1;
  function submit(){
    var x = document.getElementById("guessField").value;
  
// function for the number sent by the user
if(x == y)
{
  alert("CONGRATULATIONS "+playername +" YOU GUESSED IT RIGHT IN-"+ guess+" GUESS");
  guess= 1;
}
else if(x > y)
{
  guess++;
  alert("OOPS TRY A SMALLER NUMBER");
}
else
{
  guess++;
  alert("OOPS TRY A GREATER NUMBER");
}
  }
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}