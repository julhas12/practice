const body = document.getElementById("body");
// console.log(body);

const main = document.createElement("main");

const sectionFirst = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Bithi";
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = " Bithi is MY life";
const li2 = document.createElement("li");
li2.innerText = " Bithi is MY life";
const li3 = document.createElement("li");
li3.innerText = " Bithi is MY life";
const li4 = document.createElement("li");
li4.innerText = " Bithi is MY life";
const li5 = document.createElement("li");
li5.innerText = " Bithi is MY life";
const li6 = document.createElement("li");
li6.innerText = " Bithi is MY life";
const li7 = document.createElement("li");
li7.innerText = " Bithi is MY life";
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
ul.appendChild(li7);

sectionFirst.appendChild(h1);
sectionFirst.appendChild(ul);
main.appendChild(sectionFirst);
body.appendChild(main);

const header = document.querySelector("#body");
header.style.backgroundColor = "Gray";
header.style.color = "white";
header.style.padding = "5rem";
header.style.textAlign = "";
header.style.lineHeight = "2rem";
header.style.letterSpacing = "0.1rem";
