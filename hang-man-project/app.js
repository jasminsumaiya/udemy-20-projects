const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');
​
const figureParts = document.querySelectorAll('.figure-part');
​
const words = ['application', 'programming', 'interface', 'wizard'];
​
let selectedWord = words[Math.floor(Math.random() * words.length)];
​
let playable = true;
​
const correctLetters = [];
const wrongLetters = [];
​
// Show hidden word
function displayWord() {
​
	/* convert string to an array
	let characters = selectedWord.split(''); // 'hang' converts to ['h','a','n','g']
	let spanElements = characters.map((letter) => {
		return `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`
	});
	/*[
		'<span class="letter">''</span>',
		'<span class="letter">'a'</span>',
		'<span class="letter">''</span>',
		'<span class="letter">''</span>'
	   ]
	*/
	//let innerDataHtml = spanElements.join('');
	/*
		'<span class="letter">''</span>
		 <span class="letter">'a'</span>
		 <span class="letter">''</span>
		 <span class="letter">''</span>'
	*/
	
	
    wordEl.innerHTML = `
    ${selectedWord.split('').map((letter) => 
          `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`
         ).join('')}`;
​
    const innerWord = wordEl.innerText.replace(/[ \n]/g, '');
​
    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display = 'flex';
​
        playable = false;
    }
}
​
function updateWrongLettersEl() {
    wrongLettersEl.innerHTML = `${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}`;
​
       figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;
​
        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });
​
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        popup.style.display = 'flex';
​
        playable = false;
    }
}
​
function showNotification() {
    notification.classList.add('show');
​
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}
​
// Keydown letter press
window.addEventListener('keydown', e => {
    if (playable) {
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            const letter = e.key.toLowerCase();
​
            if (selectedWord.includes(letter)) {
                if (correctLetters.includes(letter)) {
                    showNotification();
                } else {
					correctLetters.push(letter);
                    displayWord();
                }
            } else {
                if (wrongLetters.includes(letter)) {
                    showNotification();
                } else {
                    wrongLetters.push(letter);
                    updateWrongLettersEl();
                }
            }
        }
    }
});
​
// Restart game and play again
playAgainBtn.addEventListener('click', () => {
    playable = true;
​
    //  Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);
​
    selectedWord = words[Math.floor(Math.random() * words.length)];
​
    displayWord();
​
    updateWrongLettersEl();
​
    popup.style.display = 'none';
});
​
displayWord();