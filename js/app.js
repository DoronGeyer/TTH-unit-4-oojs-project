/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const letterDiv = document.querySelector('#phrase ul');// div for letter tiles.
const keyContainerDiv = document.querySelector('#qwerty')
let letter = '';// variable updated on each button click/keystroke
let game= null;
let onscreenKeys = keyContainerDiv.querySelectorAll(".key");
// start game button listener to create a game.
const startGameButton = document.querySelector('#btn__reset')
        startGameButton.addEventListener('click',()=>{
        game = new Game(); 
        game.startGame();
        })

// on Screen Key listeners keyboard and click.
document.addEventListener('keydown', function(event){
 if( game !== null && game.gameRunning == true){
  if(/[a-z]/.test(event.key)){
    letter = event.key;
    game.handleInteraction(letter);
  }
 }
});
keyContainerDiv.addEventListener('click' ,(event) => {
  if(event.target.tagName ==="BUTTON"){
    letter = event.target.textContent;
  game.handleInteraction(letter);
  }
});
  
