const generate = {
    heading: document.getElementById("h1"),
}

async function getQuote(){
const quote = await fetch("https://api.adviceslip.com/advice")
    .then(result => result.json())
    .then(text => {
        generate.heading.innerText = text.slip.advice
    })
}

window.addEventListener("click",getQuote)
window.addEventListener("keydown",getQuote)
