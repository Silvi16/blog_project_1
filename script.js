const jokeSetup = document.getElementById('joke_setup')
const jokeDelivery = document.getElementById('joke_delivery')

newJoke()

// USING ASYNC/AWAIT

async function newJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://v2.jokeapi.dev/joke/programming', config)

    const data = await res.json()

    jokeSetup.innerHTML = data.setup
    jokeDelivery.innerHTML = data.delivery

}



/*const weather = document.getElementById('weather')


weather()

// USING ASYNC/AWAIT

async function weather() {
    const config_weather = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res_weather = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Lyon&units=metric&id=524901&appid=aa338ae2ba5da0edfbc50ac380711aef', config_weather)

    const weatherData = await res_weather.json()

    weather.innerHTML = weatherData.list[0].weather
    

}*/

