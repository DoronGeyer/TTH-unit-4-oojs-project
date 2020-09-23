/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    // constructor receives no parameters.
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases(); 
        this.activePhrase= this.getRandomPhrase();
    }
    //hides the start screen overlay, sets the activePhrase property to a random phrase
    //and calls the addPhraseToDisplay() method on the active phrase
    startGame(){
        document.getElementById("overlay").style.display= "none";
        this.activePhrase.addPhraseToDisplay();
    }
    //randomly retrieves one phrase from the phrases array
    getRandomPhrase(){
        let random = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[random];       
    }
    //1.Disables the selected letter's onscreen keyboard button
    //2.If the phrase does not include the guessed letter, the wrong CSS class is added 
    // to the selected letter's keyboard button and the removeLife() method is called
    //3.If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button
    // the showMatchedLetter() method is called on the phrase
    // the checkForWin() method is called. If the player has won the game 
    // the gameOver() method is called
    handleInteraction(event){
       let chosenKey = event.target;
       chosenKey.disabled = true;
       chosenKey.style.backgroundColor= 'tomato';
    }
    //checks if the player has revealed all of the letters in the active phrase
    checkForWin(){
        return document.getElementsByClassName('hide').length == 0;   
    }
    //removes a life from the scoreboard (one of the liveHeart.png images is replaced with a lostHeart.png image)
    //increments the missed property, if the player has lost the game calls the gameOver() method
    removeLife(){
      const livesList = document.querySelectorAll('#scoreboard li img');
      livesList[(livesList.length-1)- this.missed].setAttribute('src','images/lostHeart.png')
      this.missed++;
      if(this.missed>4){//TODO: make this optional
          this.gameOver();//TODO: make this optional
      }
    }
    //displays a final "win" or "loss" message by showing the original start screen 
    //overlay styled with either the win or lose CSS class
    gameOver(){
        document.getElementById("overlay").style.display = "block";
        let gameOverMessage = document.querySelector("#game-over-message")
            gameOverMessage.classList.remove("start");
        if(this.checkForWin()){
            gameOverMessage.classList.remove("lose");
            gameOverMessage.classList.add("win");
            gameOverMessage.textContent = `You've found the phrase! With ${5- this.missed} lives remaining`;
        }else{
            gameOverMessage.classList.add("lose");
            gameOverMessage.textContent = `Better luck next time, you've run out of lives with
                                           ${document.getElementsByClassName('hide').length} hidden letters remaining. `;
        }
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
        createPhrases(){
            let phrase= [];
                    phrase.push(new Phrase("I think therefore I am"));
                    phrase.push(new Phrase("Riddle me this"));
                    phrase.push(new Phrase("Hello clarice"));
                    phrase.push(new Phrase("Do your actions match your ambitions"));
                    phrase.push(new Phrase("Speak softly and carry a big stick"));
              return phrase;           
        };
}