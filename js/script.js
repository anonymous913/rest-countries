const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = country => {
    return `
    <div class="country">
        <h3> Country ▶ ${country.name.common}</h3>
        <p> <b> Capital: ${country.capital} </b>  </p>
        <p> <b> Continents: ${country.continents} </b> </p>
        <p> <b> Region: ${country.region} </b> </p>
        <p> <b> Population: ${country.population} </b> </p>
        <p> <b> Start of Week: ${country.startOfWeek} </b> </p>
        <p> <b> Area: ${country.area} km<sup>2</sup> </b> </p>
        <p> <b> Status: ${country.status} </b> </p>
        <img src="${country.flags.png}">
        
    </div>
    `
}

loadCountries();
