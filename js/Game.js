/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  // constructor receives no parameters.
  constructor() {
    this.gameRunning = false;
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
  //hides the start screen overlay, sets the activePhrase property to a random phrase
  //and calls the addPhraseToDisplay() method on the active phrase
  startGame() {
    // resetting the board on new game start.
    this.gameRunning = false;
    letterDiv.innerHTML = "";
    letterDiv.classList.add('fade-in');
    onscreenKeys.forEach((key) => {
      key.disabled = false;
      key.setAttribute("class", "key");
    });
    this.activePhrase = this.getRandomPhrase();
    this.missed = 0;

    document
      .querySelectorAll("img")
      .forEach((img) => img.setAttribute("src", "images/liveHeart.png"));
    //running current game

    this.gameRunning = true;
    document.getElementById("overlay").style.display = "none";
    this.activePhrase.addPhraseToDisplay();
  }
  //randomly retrieves one phrase from the phrases array
  getRandomPhrase() {
    let random = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[random];
  }
  //1.Disables the selected letter's onscreen keyboard button
  //2.If the phrase does not include the guessed letter, the wrong CSS class is added
  // to the selected letter's keyboard button and the removeLife() method is called
  //3.If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button
  // the showMatchedLetter() method is called on the phrase
  // the checkForWin() method is called. If the player has won the game
  // the gameOver() method is called
  handleInteraction(letter) {
    let audio = new Audio('sounds/buttonActivation.mp3');
    audio.volume = 0.3;
    audio.play();
    if (this.activePhrase.checkLetter(letter)) {
      onscreenKeys.forEach((character) => {
        if (character.textContent == letter) {
          character.classList.add("chosen");
          character.disabled = true;
          this.activePhrase.showMatchedLetter(letter);
          this.checkForWin() ? this.gameOver() : false;
        }
      });
    } else {
      onscreenKeys.forEach((character) => {
        if (character.textContent == letter) {
          character.classList.add("wrong");
          character.disabled = true;
          this.removeLife();
        }
      });
    }
  }
  //checks if the player has revealed all of the letters in the active phrase
  checkForWin() {
    return document.getElementsByClassName("hide").length == 0;
  }
  //removes a life from the scoreboard (one of the liveHeart.png images is replaced with a lostHeart.png image)
  //increments the missed property, if the player has lost the game calls the gameOver() method
  removeLife() {
    const livesList = document.querySelectorAll("#scoreboard li img");
    livesList[livesList.length - 1 - this.missed].setAttribute(
      "src",
      "images/lostHeart.png"
    );
    this.missed++;
    if (this.missed > 4) {
      this.gameOver();
    }
  }
  //displays a final "win" or "loss" message by showing the original start screen
  //overlay styled with either the win or lose CSS class
  gameOver() {
    letterDiv.classList.remove('fade-in');
    document.getElementById("overlay").style.display = "inherit";
    let gameOverMessage = document.querySelector("#game-over-message");
    gameOverMessage.classList.remove("start");
    if (this.checkForWin()) {
      gameOverMessage.classList.remove("lose");
      gameOverMessage.classList.add("win");
      gameOverMessage.textContent = `You've found the phrase with ${
        5 - this.missed
      } lives remaining!`;
      let audio = new Audio("sounds/TaDa.mp3");
      audio.volume = 0.3;
      audio.play();
    } else {
      gameOverMessage.classList.add("lose");
      gameOverMessage.textContent = `You've run out of lives with
                                           ${
                                             document.getElementsByClassName(
                                               "hide"
                                             ).length
                                           }
                                            hidden letters remaining. `;
      let audio = new Audio("sounds/sadTrombone.mp3");
      audio.volume = 0.3;
      audio.play();
    }
  }
  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    let phrase = [];
    phrase.push(new Phrase("I think therefore I am"));
    phrase.push(new Phrase("Riddle me this"));
    phrase.push(new Phrase("Hello clarice"));
    phrase.push(new Phrase("Just do it"));
    phrase.push(new Phrase("And still i rise"));
    return phrase;
  }
}
