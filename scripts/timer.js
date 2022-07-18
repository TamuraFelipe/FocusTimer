import {
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";
import Sounds from "./sounds.js";
import Focus from "./focus.js";

const sounds = Sounds();
const focus = Focus();

export let timerTimeOut; //Exportando para o controls
export default function Timer({}) {
  function countDown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let finished = minutes == 0 && seconds == 0;

      if (finished) {
        sounds.kitchenFinished();
        focus.removeFocus();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, seconds - 1);

      countDown();
    }, 1000);
  }
  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }
  function updateMinutes(type) {
    let minutes = Number(minutesDisplay.textContent);
    if (type === "minus") {
      if (minutes >= 5) {
        minutes -= 5;
      } else if (minutes < 5) {
        minutes -= 1;
      } else {
        buttonMinus.disabled = true;
      }
      updateDisplay(minutes, 0);
    }

    if (type === "plus") {
      if (minutes <= 55) {
        minutes += 5;
      } else if (minutes > 55) {
        minutes += 1;
      } else {
        buttonPlus.disabled = true;
      }
      updateDisplay(minutes, 0);
    }
  }

  return {
    countDown,
    updateDisplay,
    updateMinutes,
  };
}
