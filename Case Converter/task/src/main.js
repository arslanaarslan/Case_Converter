// download function as a text file
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


const textArea = document.getElementById("textarea");

const upperCaseButton = document.getElementById("upper-case");
const lowerCaseButton = document.getElementById("lower-case");
const properCaseButton = document.getElementById("proper-case");
const sentenceCaseButton = document.getElementById("sentence-case");
const saveTextFileButton = document.getElementById("save-text-file");

upperCaseButton.addEventListener("click", () => {
    textArea.value = textArea.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", () => {
    textArea.value = textArea.value.toLowerCase();
});

properCaseButton.addEventListener("click", () => {
    textArea.value = textArea.value.toLowerCase();

    let words = textArea.value.split(" ");
    let properCasedWords = [];

    words.forEach((word) => {
       properCasedWords.push(word[0].toUpperCase() + word.substring(1));
    });

    textArea.value = properCasedWords.join(" ");
});

sentenceCaseButton.addEventListener("click", () => {
    textArea.value = textArea.value.toLowerCase();

    let sentences = textArea.value.split(". ");
    let sentenceCasedSentences = [];

    sentences.forEach((sentence) => {
       sentenceCasedSentences.push(sentence[0].toUpperCase() + sentence.substring(1));
    });

    textArea.value = sentenceCasedSentences.join(". ");
});

saveTextFileButton.addEventListener("click", () => {
    download("text.txt", textArea.value);
});