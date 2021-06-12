var inputText = document.querySelector("#txtInput");
var outputDiv = document.querySelector("#txtOutput");
var btnTranslate = document.querySelector("#btnTranslate");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(userText) {
  return serverUrl + "?text=" + userText;
}

function clickHandler() {
  var userInput = inputText.value;
  fetch(getTranslationUrl(userInput))
    .then((response) => response.json())
    .then((data) => {
      var translatedText = data.contents.translated;
      outputDiv.innerText = translatedText;
    });
}

btnTranslate.addEventListener("click", clickHandler);
