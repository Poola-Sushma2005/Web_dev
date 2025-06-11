let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let running = false;

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
  running = false;
}

function resetStopwatch() {
  stopStopwatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

updateDisplay(); // Initialize display
