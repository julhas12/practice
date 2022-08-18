const placesList = document.getElementById('places-list')
const li = document.createElement('li');
li.innerText = 'sky driving';
placesList.appendChild(li);


const mainContainer = document.getElementById('main-container')

const section = document.createElement('section');
const h1 = document.createElement('h1')
h1.innerText = "My Food List";
section.appendChild(h1);

const ul =document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'burger';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'biryani';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'pasta';
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section)

// set inner html dirctlu
const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1> My Dress section</h1>
<ul>
<li> T-shirt</li>
<li>pant</li>
</ul>

`
mainContainer.appendChild(sectionDress)