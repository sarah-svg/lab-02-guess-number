/* eslint-disable quotes */
let y = Math.floor(Math.random() * 20 + 1); 
   
// counting the number of guesses 
// made for correct Guess 
let number = 1; 

document.getElementById("submit-guess").onclick = function(){ 
  
  
    let x = document.getElementById("guessField").value; 

    if (x === y) 
    {     
        alert("Congrats "
           + `${ number } GUESS `); 
    } 
    else if (x > y) 
   
    {     
        number++; 
        alert("TOO HIGH"); 
    } 
    else
    { 
        number++; 
        alert("TOO LOW"); 
    } 

};
// eslint-disable-next-line no-unused-vars
function clear()
{
    document.getElementById("myForm").reset();
}


