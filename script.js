let timer;
let startTime;
let running = false;
let elapsed = 0;

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsed;
        timer = setInterval(updateStopwatch, 10);
        running = true;
    }
}

function updateStopwatch() {
    const currentTime = Date.now();
    elapsed = currentTime - startTime;
    displayTime(elapsed);
}

function displayTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(2);
    document.getElementById("timer").innerText = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}

function pauseStopwatch() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    elapsed = 0;
    displayTime(elapsed);
    running = false;
}

// Attaching event listeners to buttons
document.querySelector("button[data-action='start']").addEventListener("click", startStopwatch);
document.querySelector("button[data-action='pause']").addEventListener("click", pauseStopwatch);
document.querySelector("button[data-action='reset']").addEventListener("click", resetStopwatch);
