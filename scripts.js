const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

function toUpperCase() {
    outputText.value = inputText.value.toUpperCase();
}

function toLowerCase() {
    outputText.value = inputText.value.toLowerCase();
}

function toTitleCase() {
    outputText.value = inputText.value
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function toSentenceCase() {
    let text = inputText.value.toLowerCase();
    outputText.value = text.charAt(0).toUpperCase() + text.slice(1);
}

function capitalizeWords() {
    outputText.value = inputText.value
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function reverseText() {
    outputText.value = inputText.value.split("").reverse().join("");
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");

}

function erase() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").value = "";
}

function removeSpaces() {
    const inputText = document.getElementById("inputText").value;

    const noSpacesText = inputText.replace(/\s+/g, ""); 

    document.getElementById("outputText").value = noSpacesText;
}
document.getElementById('inputText').addEventListener('input', function() {
    const inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').value = inputText;
});
