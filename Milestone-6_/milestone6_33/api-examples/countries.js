const loadCountries =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    /* for(const country of countries){
        console.log(country);
    } */
    const countriesContainer =document.getElementById('countrie-container')
    countries.forEach(country => {
        const countryDiv =document.createElement('div');
        console.log(country);
        countryDiv.classList.add('country');
        countryDiv.innerHTML =`
        <h3>name: ${country.name.common}</h3>
        <p>capital: ${country.capital? country.capital[0]: 'No capital'}</p>
        <button onclick="loadCountryDetals('${country.cca2}')"> Details</button>
        `;
        countriesContainer.appendChild(countryDiv)
    });

}
const loadCountryDetals = (code)=>{
    const url =`https://restcountries.com/v3.1/alpha/${code}`
    // console.log('country',code);
   fetch(url)
   .then(res => res.json())
   .then(data => displayCountry(data[0]))
}

const displayCountry = country =>{
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Detail: ${country.name.common}</h2>
    <img src=" ${country.flags.png}">
    `
}
loadCountries()