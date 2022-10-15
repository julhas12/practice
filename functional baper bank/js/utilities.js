function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString)
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueStrin = textElement.innerText;
    const textValue = parseFloat(textElementValueStrin);
    return textValue;
}

function setTextElementvalueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}