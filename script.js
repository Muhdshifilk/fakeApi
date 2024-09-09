function getSpeciality() {
    const dateInput = document.getElementById('dateInput').value;
    const [year, month, day] = dateInput.split('-');
    const url = `https://history.muffinlabs.com/date/${month}/${day}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displaySpeciality(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displaySpeciality(data) {
    const events = data.data.Events;
    const births = data.data.Births;
    const deaths = data.data.Deaths;

    let result = `<h2>Speciality of ${data.date}</h2>`;
    
    result += `<h3>Historical Events</h3>`;
    events.forEach(event => {
        result += `<p>${event.year}: ${event.text}</p>`;
    });

    result += `<h3>Famous Birthdays</h3>`;
    births.forEach(birth => {
        result += `<p>${birth.year}: ${birth.text}</p>`;
    });

    result += `<h3>Notable Deaths</h3>`;
    deaths.forEach(death => {
        result += `<p>${death.year}: ${death.text}</p>`;
    });

    document.getElementById('specialityResult').innerHTML = result;
}
