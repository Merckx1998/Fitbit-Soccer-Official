/*
 * Entry point for the watch app
 */
import document from "document";
import { vibration } from 'haptics';

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text = minutes + ":" + seconds;
        if (--timer < 0) {
          clearInterval(interval);
          display.text = 'END HALF';
          vibrate(3);
        }
    }, 1000);
}

function vibrate(secondsToVibrate) {
  vibration.start('bump')
  
  let countdown = secondsToVibrate;
  const vibrateTimer = setInterval(function() {
    countdown--;
    if (countdown <= 0) {
      clearInterval(vibrateTimer);
      vibration.stop();
    }
  })
}

const gameTimeClock = document.getElementById("game-time-clock")
startTimer(22 * 60, gameTimeClock);

