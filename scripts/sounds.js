export default function Sounds() {
  const press = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );

  const florest = new Audio("./sounds/Floresta.wav");
  const rain = new Audio("./sounds/Chuva.wav");
  const coffeeShop = new Audio("./sounds/Cafeteria.wav");
  const firePlace = new Audio("./sounds/Lareira.wav");

  function kitchenFinished() {
    kitchenTimer.play();
  }
  function soundPressButton() {
    press.play();
  }

  function playFlorest() {
    soundPressButton();
    florest.play();
    rain.pause();
    coffeeShop.pause();
    firePlace.pause();
  }
  function playRain() {
    soundPressButton();
    rain.play();
    florest.pause();
    coffeeShop.pause();
    firePlace.pause();
  }
  function playCoffeeShop() {
    soundPressButton();
    coffeeShop.play();
    florest.pause();
    rain.pause();
    firePlace.pause();
  }
  function playFirePlace() {
    soundPressButton();
    firePlace.play();
    florest.pause();
    rain.pause();
    coffeeShop.pause();
  }
  
  return {
    playFlorest,
    playRain,
    playCoffeeShop,
    playFirePlace,
    kitchenFinished,
    soundPressButton,
  };
}
