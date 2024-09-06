const miliSec = document.querySelector('.miliSec')
const sec = document.querySelector('.sec')
const min = document.querySelector('.min')
const timer = document.querySelector('.time')
const btnStart = document.querySelector('.start')
const btnStop = document.querySelector('.stop')
const btnReset = document.querySelector('.reset')

let interval
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let time = 0;


btnStart.onclick = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        milliseconds++
        if (milliseconds === 100) {
            milliseconds = 0
            seconds++
        }
        if (seconds === 60) {
            seconds = 0
            minutes++
        }
        if (minutes === 60) {
            minutes = 0
            time++
        }
        miliSec.innerHTML = milliseconds
        sec.innerHTML = seconds
        min.innerHTML = minutes
        timer.innerHTML = time
    }, 20)
}

btnStop.onclick = () => {
    clearInterval(interval)
}

btnReset.onclick = () => {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    time = 0
    miliSec.innerHTML = '0'
    sec.innerHTML = '0'
    min.innerHTML = '0'
    timer.innerHTML = '0'
}


