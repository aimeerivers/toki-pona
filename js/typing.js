const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('input', () => {
  const textWithBreaks = input.value.replace(/\n/g, '<br>');
  output.innerHTML = textWithBreaks;
});
