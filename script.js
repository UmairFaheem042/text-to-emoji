const inputText = document.getElementById("text-message");
const convertBtn = document.getElementById("convertBtn");
const resultEl = document.getElementById("result");

inputText.value = "";

const convertText = () => {
  let clutter = "";
  let value = inputText.value;
  let valueChar = value.split("");

  valueChar.forEach((character) => {
    clutter += `&#128${character.charCodeAt()}`;
  });
  resultEl.style.display = "block";
  resultEl.innerHTML = clutter;
};

convertBtn.addEventListener("click", () => {
  if (inputText.value.length < 1)
    resultEl.innerHTML = `<span class = 'error-message'>NOTHING WAS TYPED!!!</span>`;
  else {
    resultEl.innerHTML = "";
    convertText();
  }
});

