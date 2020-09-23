/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const letterDiv = document.querySelector('#phrase ul');// div for letter tiles.
const keyContainerDiv = document.querySelector('#qwerty')
let letter = '';// variable updated on each button click/keystroke
let game;

// start game button listener to create a game.
const startGameButton = document.querySelector('#btn__reset')
        startGameButton.addEventListener('click',()=>{
        game = new Game(); 
        game.startGame();
        })

// on Screen Key listeners keyboard and click.TODO: keyboard interaction not implemented. Need to disable bultiple
document.addEventListener('keydown', function(event){
 letter = event.key;
  console.log("current key board :" +letter);
  game.handleInteraction(letter);//FIXME: need to pass the actual key as an event.
 // console.log(event.key);
});
keyContainerDiv.addEventListener('click' ,(event) => {
  if(event.target.tagName ==="BUTTON"){
    letter = event.target.textContent;
    console.log('current key click:'+ letter)
  game.handleInteraction(event);//TODO: event only passed for testing with console.log inside method
  }
});
        /*todos

2. Clicking an onscreen keyboard button results in a call to the 
   handleInteraction()method for the clicked keyboard button
3. Clicking the spaces between and around the onscreen keyboard buttons 
   does not result in the handleInteraction() method being called.
exceeds:

1.Event listener has been added for the keydown or keyup event
  so that pressing a physical keyboard button results in the handleInteraction() method 
  being called for the associated onscreen keyboard button.
2.App styles have been personalized and changes have been noted in the README.md file 
  and the project submission notes 
*/

//tester code step 7 study guide TODO: tested this and its working
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//step 9 game tester code
