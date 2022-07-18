import { buttonPlus, buttonMinus, minutesDisplay, secondsDisplay } from "./elements.js";
import { timerTimeOut  } from "./timer.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";

const timer = Timer({});
const sounds = Sounds({});

export default function Controls({
  pauseTimer,
}) {
  function playTimer() {
    sounds.soundPressButton();
    timer.countDown();
  }
  function stopTimer() {
    sounds.soundPressButton();
    pauseTimer();
  }
  function pauseTimer() {
    let minutes = minutesDisplay.textContent;
    let seconds = secondsDisplay.textContent;
    clearTimeout(timerTimeOut);
    timer.updateDisplay(minutes, seconds);
  }
  function plusTimer() {
    sounds.soundPressButton();
    plus();
  }
  function minusTimer() {
    sounds.soundPressButton();
    minus();
  }
  function plus() {
    buttonMinus.disabled = false;
    let type = "plus";
    timer.updateMinutes(type);
    let minutes = Number(minutesDisplay.textContent);
    let finished = minutes === 60;
    if (finished) {
      buttonPlus.disabled = true;
      timer.updateDisplay(minutes, 0);
    } else {
      buttonPlus.disabled = false;
    }
  }
  function minus() {
    buttonPlus.disabled = false;
    let type = "minus";
    timer.updateMinutes(type);
    let minutes = Number(minutesDisplay.textContent);
    let finished = minutes === 0;
    if (finished) {
      buttonMinus.disabled = true;
      timer.updateDisplay(minutes, 0);
    }
  }

  return {
    playTimer,
    stopTimer,
    plusTimer,
    minusTimer,
  };
}
