const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
   section.style.border = '2px solid steelblue';
   section.style.margin = "20px";
   section.style.borderRadius ='15px';
   section.style.paddingLeft = '10px';
   section.style.backgroundColor ='gray'
}

// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = "yellow";
const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg', 'text-center')
placesContainer.classList.remove('font')