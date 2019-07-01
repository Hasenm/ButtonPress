console.log("script running");

const lightbulb1 = document.querySelector('#lightbulb1');
console.log(lightbulb1);
console.log(lightbulb1.classList);

const lightbulb2 = document.querySelector('#lightbulb2');
console.log(lightbulb2);
console.log(lightbulb2.classList)

const lightbulb3 = document.querySelector('#lightbulb3');
console.log(lightbulb3);
console.log(lightbulb3.classList);

const startgame = document.querySelector('#startgame');
console.log(startgame);
console.log(startgame.classList);

const bulbs = [lightbulb1, lightbulb2, lightbulb3]
let counter = 0
let lightbulb_sequence = []

const getRandomNumberBetween1and3 = () => {
    return(Math.floor(Math.random() * 3))
}

const getRandomIntUnder = (x) => {
    return(Math.floor(Math.random() * x))
}


startgame.addEventListener('click', e => {
    console.log('Gosign clicked!')
    startgame.classList.toggle('active')
    counter += 1
    randomNumber = getRandomIntUnder(3)
    randomBulb = bulbs[randomNumber]
    lightbulb_sequence.push(randomBulb)
    console.log(lightbulb_sequence)
    run_sequence()
});

if (startgame.classList.toggle('active')) {
    alert ("Remember the sequence");
}

const run_sequence = () => {
    lightbulb_sequence.forEach(bulbs => {
        if (counter = 0) {
            lightbulb1.classList.toggle('active') }
            lightbulb_sequence.push(1)
            setTimeout(function() {lightbulb1.classList.toggle('inactive')}, 10000);
        if (counter = 1) {
            lightbulb2.classList.toggle('active') }
            lightbulb_sequence.push(2)
            setTimeout(function() {lightbulb2.classList.toggle('inactive')}, 10000);
        if (counter = 2) {
            lightbulb3.classList.toggle('active') }
            lightbulb_sequence.push(3)
            setTimeout(function() {lightbulb3.classList.toggle('inactive')}, 10000);
    })
}

let user_clicks = []

lightbulb2.addEventListener('click', e => {
    console.log('lightbulb2 clicked!');
    user_clicks.push("2")
    lightbulb2.classList.toggle('active')
});

lightbulb3.addEventListener('click', e => {
    console.log('lightbulb3 clicked!');
    user_clicks.push("3")
    lightbulb3.classList.toggle('active')
})

lightbulb1.addEventListener('click', e => {
    console.log("lightbulb1 clicked!")
    user_clicks.push("1")
    lightbulb1.classList.toggle('active')
})

//if (lightbulb_sequence = user_clicks