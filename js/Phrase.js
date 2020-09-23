/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    // need to convert to lower case
  }
  //adds the phrase to the gameboard by splitting the random phrase into an array of letters.
  //The array is looped over and the HTML is built up , and assigned to the div on the page.
  addPhraseToDisplay() {
    let arrayOfLetters = [...game.activePhrase.phrase];
    let HTML = "";
    // builds out an li element with a correct class and add to innerHTML
    arrayOfLetters.forEach((character) => {
      if (character !== " ") {
        HTML += `<li class="hide letter ${character}">${character}</li>`;
      } else if (character == " ") {
        HTML += `<li class="space"> </li>`;
      }
    });
    letterDiv.innerHTML = HTML;
  }
  //checks if a letter is in the phrase
  checkLetter(testLetter) {
    return game.activePhrase.phrase.includes(testLetter); //TODO: note game.activPhrase returns an object. adding .phrase accesses the phrase objects phrase property.
  }
  //reveals the letter(s) on the board that matches the player's selection
  showMatchedLetter(testLetter) {
    letterDiv.querySelectorAll("li").forEach((listItem) => {
      if (listItem.textContent === testLetter) {
        listItem.className = `show letter ${testLetter}`;
      }
    })
  }
}
