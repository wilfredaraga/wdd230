const temp = document.createElement('p');
const desc = document.createElement('p');
const weatherIcon = document.createElement('img');
const weather0 = document.createElement('div');
const weather1 = document.createElement('div');
const weather2 = document.createElement('div');
const weather3 = document.createElement('div');
const weather = document.querySelector('.weatherDisplay')


const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=14.2&lon=121&units=imperial&appid=b228c9a53a08e7e9b5459764013776a8'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data.list);
            displayWeather(data.list);
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
    const iconsrc = `https://openweathermap.org/img/wn/${data[0].weather[0].icon}.png`;
    desc.textContent = data[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    temp.innerHTML = `${data[0].main.temp}&deg;F - `;

    weather0.appendChild(weatherIcon);
    weather0.appendChild(temp);
    weather0.appendChild(desc);

    weather.appendChild(weather0);


    const forecast = document.createElement('h3');
    forecast.textContent = 'Forecast'
    weather.appendChild(forecast);

    const weatherIcon1 = document.createElement('img');
    const temp1 = document.createElement('p');
    const iconsrc1 = `https://openweathermap.org/img/wn/${data[1].weather[0].icon}.png`;
    weatherIcon1.setAttribute('src', iconsrc1);
    temp1.innerHTML = `${data[1].main.temp}&deg;F`;
    weather1.appendChild(weatherIcon1);
    weather1.appendChild(temp1);
    weather.appendChild(weather1);

    const weatherIcon2 = document.createElement('img');
    const temp2 = document.createElement('p');
    const iconsrc2 = `https://openweathermap.org/img/wn/${data[2].weather[0].icon}.png`;
    weatherIcon2.setAttribute('src', iconsrc2);
    temp2.innerHTML = `${data[2].main.temp}&deg;F`;
    weather2.appendChild(weatherIcon2);
    weather2.appendChild(temp2);
    weather.appendChild(weather2);

    const weatherIcon3 = document.createElement('img');
    const temp3 = document.createElement('p');
    const iconsrc3 = `https://openweathermap.org/img/wn/${data[3].weather[0].icon}.png`;
    weatherIcon3.setAttribute('src', iconsrc3);
    temp3.innerHTML = `${data[3].main.temp}&deg;F`;
    weather3.appendChild(weatherIcon3);
    weather3.appendChild(temp3);
    weather.appendChild(weather3);
}
