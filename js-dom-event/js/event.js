// option 2 : onclick function
function makered() {
    document.body.style.backgroundColor = 'red';
}


// option3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option4

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option 4 onather
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = "green";
});

// option 4 final
document.getElementById('make-golden').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'

})