const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');

var countDownDate = new Date("September 5, 2022 11:30:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var daysTimer = Math.floor(distance / (1000*60*60*24));
  var hoursTimer = Math.floor((distance % (1000*60*60*24)) / (1000 * 60 * 60));
  var minsTimer = Math.floor((distance % (1000*60*60)) / (1000 * 60));
  var secsTimer = Math.floor((distance % (1000*60)) / 1000);

  days.innerHTML = daysTimer;
  hours.innerHTML = hoursTimer;
  mins.innerHTML = minsTimer;
  secs.innerHTML = secsTimer;

  if (distance < 0) {
    clearInterval(x);
    days.innerHTML = 0;
    hours.innerHTML = 0;
    mins.innerHTML = 0;
    secs.innerHTML = 0;
  }
}, 1000);