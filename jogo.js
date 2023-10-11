const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const message = document.getElementById('message');
let attempts = 0;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Parabéns! Você acertou o número em ${attempts} tentativas!`;
        message.style.color = 'green';
        guessField.disabled = true;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Muito baixo! Tente novamente.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Muito alto! Tente novamente.';
        message.style.color = 'red';
    }

    guessField.value = '';
    guessField.focus();
}
