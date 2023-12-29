"use strict";

const secondPointer = document.getElementById("second");
const minutePointer = document.getElementById("minute");
const hourPointer = document.getElementById("hour");

const secondText = document.getElementById("d__second");
const minuteText = document.getElementById("d__minute");
const hourText = document.getElementById("d__hour");

const tickSound = new Audio("./assets/audio/secound.mp3");
const tockSound = new Audio("./assets/audio/secound.mp3");
const hourChimeSound = new Audio("./assets/audio/hour.mp3");

const clock = () => {
  const time = new Date();

  secondText.textContent = String(time.getSeconds()).padStart(2, "0");
  minuteText.textContent = String(time.getMinutes()).padStart(2, "0");
  hourText.textContent = String(time.getHours()).padStart(2, "0");

  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() / 2;
  const minuteDeg = time.getMinutes() * 6;
  const secondDeg = time.getSeconds() * 6;

  hourPointer.style.transform = `rotate(${hourDeg}deg)`;
  minutePointer.style.transform = `rotate(${minuteDeg}deg)`;
  secondPointer.style.transform = `rotate(${secondDeg}deg)`;

  // Play a sound every minute
  if (time.getSeconds() === 0) {
    tickSound.currentTime = 0;
    tickSound.play().catch(error => {
      console.error("Failed to play sound:", error);
    });
  }

  // Play a sound every hour
  if (time.getHours() % 12 === 0 && time.getMinutes() === 0 && time.getSeconds() === 0) {
    hourChimeSound.currentTime = 0;
    hourChimeSound.play().catch(error => {
      console.error("Failed to play sound:", error);
    });
  }
};

setInterval(clock, 1000);
