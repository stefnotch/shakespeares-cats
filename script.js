const pictureUrl =
  "https://cataas.com/cat/says/hello?width=800&height=800&size=50";
const pictureElement = document.getElementById("picture-element");
const nextButton = document.getElementById("next-button");
const loadingClass = "loading";

loadPicture();

nextButton.addEventListener("click", () => {
  loadPicture();
});

function loadPicture() {
  pictureElement.classList.add(loadingClass);
  pictureElement.onload = () => {
    pictureElement.classList.remove(loadingClass);
  };
  pictureElement.src = `${pictureUrl}&cacheBuster=${Date.now()}`;
}
