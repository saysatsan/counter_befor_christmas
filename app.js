let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
const timer = document.querySelector('.countdown');

document.addEventListener('DOMContentLoaded', function() {
  // Отримання відео та аудіо елементів
  var video = document.getElementById('myVideo');
  var audio = document.querySelector('audio');

 

  // Запуск відео
  if (video) {
      video.autoplay = true; // Потрібно включити вимкнення звуку для Safari
      video.loop = true;
  }

  Запуск аудіо
  if (audio) {
      audio.autoplay = true;
      audio.muted = true; // Потрібно включити вимкнення звуку для Safari
  }
});
 document.addEventListener('click', function() {
    audio.play();
  });

function countdown() {
  let targetDate = new Date('2024-12-25T00:00:00');
  let now = new Date();
  let difference = targetDate - now;

  let days = Math.floor(difference / 1000 / 60 / 60 / 24);
  let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(difference / 1000 / 60) % 60;
  let seconds = Math.floor(difference / 1000) % 60;

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;

  if (difference < 0) {
    timer.style.display = 'none';
    document.getElementById('end').style.display = 'block';
  }
  
  
}

// countdown();

setInterval(countdown, 1000);

