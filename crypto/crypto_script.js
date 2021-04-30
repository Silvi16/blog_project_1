const bitcoin = document.getElementById('bitcoin')


bitcoinPrice()

// USING ASYNC/AWAIT

async function bitcoinPrice() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    const res = await fetch('https://api.cryptonator.com/api/full/btc-usd', config)

    const data = await res.json()

    /*bitcoin.innerHTML = data.ticker.price*/


    const price = data.ticker.price;
    const rounded = Math.round(price)
    bitcoin.innerHTML = rounded
}

window.setInterval(bitcoinPrice, 1000);




