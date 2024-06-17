const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', handleImput);

function handleImput(event) {
  const userText = event.currentTarget.value;
  if (userText.trim() === '') {
    outputText.textContent = 'Anonymous';
  } else {
    outputText.textContent = userText;
  }
}