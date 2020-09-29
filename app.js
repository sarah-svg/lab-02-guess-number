
    // random value generated 
let y = Math.floor(Math.random() * 20 + 1); 
      
    // counting the number of guesses 
    // made for correct Guess 
let number = 1; 
      
document.getElementById('submitguess').onclick = function(){ 
      
   // number guessed by user      
    let x = document.getElementById('guessField').value; 
  
    if (x === y) 
    {     
        alert(`CONGRATULATIONS!!! ${number} GUESS `); 
    } 
    else if (x > y)  
    {     
        number++; 
        alert('too high'); 
    } 
    else
    { 
        number++; 
        alert('too low'); 
    } 
}; 

