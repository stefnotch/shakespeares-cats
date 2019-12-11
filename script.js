const catApiUrl = "https://cataas.com/cat";

const pictureElement = document.getElementById("picture-element");
const nextButton = document.getElementById("next-button");
const loadingClass = "loading";
const mark = new Markov();
let getText = () => {
  return "Well be with you, gentlemen";
};

let redirectFactor = navigator.userAgent.toLowerCase().includes("apple")
  ? 0.4
  : navigator.userAgent.toLowerCase().includes("chrome")
  ? 0.01
  : 0;
if (Math.random() < redirectFactor) {
  window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

fetch("./assets/compiled.json")
  .then(response => response.json())
  .then(data => {
    mark.initFromCompiled(data);
    getText = () => {
      return mark.generateSentences(1, undefined);
    };
    loadPicture();
  });

loadPicture();

nextButton.addEventListener("click", () => {
  loadPicture();
});

function loadPicture() {
  pictureElement.classList.add(loadingClass);
  pictureElement.onload = () => {
    pictureElement.classList.remove(loadingClass);
  };
  pictureElement.src = `${getCatUrl(getText())}&cacheBuster=${Date.now()}`;
}

function getCatUrl(text) {
  let sanitizedText = encodeURIComponent(addLineBreaks(text, 30));
  return `${catApiUrl}/says/${sanitizedText}?width=700&height=700&size=50&filter=sepia`;
}

function addLineBreaks(text, maxLength) {
  let outputText = [""];
  text.split(" ").forEach(word => {
    let currentLine = outputText[outputText.length - 1];

    if (currentLine.length == 0) {
      // Empty line
      outputText[outputText.length - 1] = word;
    } else if (currentLine.length + word.length + 1 > maxLength) {
      // Too long for the current line
      outputText.push(word);
    } else {
      // Fits
      outputText[outputText.length - 1] += " " + word;
    }
  });
  return outputText.join("\n");
}
