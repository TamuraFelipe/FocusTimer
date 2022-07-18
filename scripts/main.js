import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  btnFlorest,
  btnRain,
  btnCoffeeShop,
  btnFirePlace,
} from "./elements.js";
import Sounds from "./sounds.js";
import Controls from "./controls.js";
import Focus from "./focus.js";

const sound = Sounds();
const controls = Controls({});
const addFocus = Focus();

//Events JS
buttonPlay.addEventListener("click", controls.playTimer);
buttonStop.addEventListener("click", controls.stopTimer);
buttonPlus.addEventListener("click", controls.plusTimer);
buttonMinus.addEventListener("click", controls.minusTimer);

btnFlorest.addEventListener("click", sound.playFlorest);
btnRain.addEventListener("click", sound.playRain);
btnCoffeeShop.addEventListener("click", sound.playCoffeeShop);
btnFirePlace.addEventListener("click", sound.playFirePlace);

