const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503 }
];

const countries = [
    { name: 'USA', bounds: [[24.396308, -125.0], [49.384358, -66.93457]] },
    { name: 'Japan', bounds: [[24.396308, 122.93457], [45.551483, 153.986672]] }
];

let highlightedCities = [];
let highlightedCountries = [];

function addCities() {
    cities.forEach(city => {
        L.circle([city.lat, city.lng], {
            color: 'blue',
            fillColor: '#30a3dc',
            fillOpacity: 0.5,
            radius: 50000
        }).addTo(map).bindPopup(`<b>${city.name}</b>`);
        highlightedCities.push(city);
    });
}

function addCountries() {
    countries.forEach(country => {
        L.rectangle(country.bounds, {
            color: 'green',
            weight: 2,
            fillOpacity: 0.1
        }).addTo(map).bindPopup(`<b>${country.name}</b>`);
        highlightedCountries.push(country);
    });
}

addCities();
addCountries();

document.getElementById('city-count').textContent = highlightedCities.length;
document.getElementById('country-count').textContent = highlightedCountries.length;
