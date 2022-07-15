//Main JS
const buttonPlay = document.querySelector(".timer-controls-play");
const buttonStop = document.querySelector(".timer-controls-stop");
const buttonPlus = document.querySelector(".timer-controls-plus");
const buttonMinus = document.querySelector(".timer-controls-minus");
const minutesDisplay = document.querySelector(".display-timer-minutes");
const secondsDisplay = document.querySelector(".display-timer-seconds");

//Events JS
buttonPlay.addEventListener("click", playTimer);
buttonStop.addEventListener("click", stopTimer);
buttonPlus.addEventListener("click", plusTimer);
buttonMinus.addEventListener("click", minusTimer);

//Controls JS
function playTimer() {
  countDown();
}
function stopTimer() {
  pauseTimer();
}
function plusTimer() {
    plus();
}
function minusTimer() {
  minus();
}

//Timer JS
function countDown() {
  timerTimeOut = setTimeout(function () {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let finished = minutes == 0 && seconds == 0;

    if (finished) {
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      --minutes;
    }

    updateDisplay(minutes, seconds - 1);

    countDown();
    console.log(minutes, seconds);
  }, 1000);
}

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function pauseTimer() {
    let minutes = minutesDisplay.textContent;
    let seconds = secondsDisplay.textContent;
  clearTimeout(timerTimeOut);
  updateDisplay(minutes, seconds);
}

function updateMinutes(type) {
  let minutes = Number(minutesDisplay.textContent);
  if (type === "minus") {
    if(minutes >= 5) {
        minutes -=5
    } else if (minutes < 5){
        minutes -= 1;
    } else {
        buttonMinus.disabled = true;
    }
    updateDisplay(minutes, 0);
  }

  if (type === "plus") {
    if(minutes <= 55){
        minutes += 5;
    } else if (minutes > 55) {
        minutes += 1;
    } else {
        buttonPlus.disabled = true;
    }
    updateDisplay(minutes, 0);
  }
}

function plus() {
  buttonMinus.disabled = false;
    let type = "plus";
    updateMinutes(type);
    let minutes = Number(minutesDisplay.textContent);
    let finished = minutes === 60;
    console.log(finished);
    if (finished) {
    buttonPlus.disabled = true;    
    updateDisplay(minutes, 0)
    } else {
        buttonPlus.disabled = false;
    }
}

function minus() {
  buttonPlus.disabled = false;
  let type = "minus";
  updateMinutes(type);
  let minutes = Number(minutesDisplay.textContent);
  let finished = minutes === 0;
  console.log(finished);
  if (finished) {
    buttonMinus.disabled = true;    
    updateDisplay(minutes, 0)
    } 
}