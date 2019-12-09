const pictureUrl =
  "https://cataas.com/cat/says/hello?width=800&height=800&size=50";
const pictureElement = document.getElementById("picture-element");
const nextButton = document.getElementById("next-button");

loadPicture();

nextButton.addEventListener("click", () => {
  loadPicture();
});

function loadPicture() {
  pictureElement.src = `${pictureUrl}&cacheBuster=${Date.now()}`;
}
