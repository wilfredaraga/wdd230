const currentCondition = document.querySelector('#currentCondition');
const temp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weatherIcon');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=14.2&lon=121&appid=3c4c5a6032c728bb30e825aa4fa46cf9&units=imperial'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

const displayWeather = (data) => {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    temp.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
}