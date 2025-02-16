import { apiurl } from "./api.js";

const refeurbtn = document.getElementById("refresh-eur")
const refgbpbtn = document.getElementById("refresh-gbp")
const refirrbtn = document.getElementById("refresh-irr")
const refallbtn = document.getElementById("refresh-all")

const euratext = document.getElementById("eur-rate")
const gbgratext = document.getElementById("gbp-rate")
const irratext = document.getElementById("irr-rate")

async function getrate() {
    try {
        const response = await fetch(apiurl)
        const data = await response.json()
        return data.conversion_rate
    } catch (error) {
        alert("خطا در دریافت نرخ ارز ها:", error)
    }
}
refeurbtn.addEventListener('click', async () => {
    const rates = await getrate()
    euratext.innerText = rates.EUR.tofixed(2)
})

refgbpbtn.addEventListener('click', async () => {
    const rates = await getrate()
    gbgratext.innerText = rates.GBG.tofixed(2)
})

refirrbtn.addEventListener('click', async () => {
    const rates = await getrate()
    irratext.innerText = (rates.IRR * 100000).tofixed(0)
})
refallbtn.addEventListener('click', async () => {
    const rates = await getrate()
    euratext.innerText = rates.EUR.tofixed(2)
    gbgratext.innerText = rates.GBG.tofixed(2)
    irratext.innerText = (rates.IRR * 100000).tofixed(0)
})
