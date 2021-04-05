'use strict';
var timeText = document.querySelectorAll(".countdown-text");
var textTime;
 console.log(timeText);
var clock = document.querySelector(".countdown");
console.log(clock)
var daysSpan = clock.querySelector(".days");
var hoursSpan = clock.querySelector(".hours");
var minutesSpan = clock.querySelector(".minutes");
var secondsSpan = clock.querySelector(".seconds");

function getNoun(number, one, two, five) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}


function getTimeRemaining(endtime) {
  var t = endtime - Date.parse(new Date());
  // var newDate = new Date();
  // newDate.setDate(newDate.getDate() - 2);

  // t = t <= 0 ? Date.parse(endtime) - Date.parse(newDate) : t;
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t, //?
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  

  function updateClock() {
    var t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    textTime = getNoun(t.days, 'дня', 'день', 'дней');
    timeText[0].innerHTML = getNoun(t.days, "день", "дня", "дней");

    if (t.total <= 1) {
      clearInterval(timeinterval);
      daysSpan.innerHTML = "0";
      hoursSpan.innerHTML = "00";
      minutesSpan.innerHTML = "00";
      secondsSpan.innerHTML = "00";
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "April 3 2021 00:00:00 GMT+0300";
// // var deadline = "January 01 2021 00:00:00 GMT+0300"; //for Ukraine
// // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer

// расчет времени до точки отсчета
function TargetTime(target) {
  var targetTime = new Date();
  deadline = targetTime.setDate(targetTime.getDate() + target.days);
  deadline = targetTime.setHours(target.hours, target.minutes, target.seconds);

  deadline =
    target.days == 0 && target.hours == 0 && target.minutes == 0 && target.seconds === 0
      ? Date.parse("April 5 2021 00:00:00 GMT+0300")
      : deadline;
  return deadline;
}

// точка отсчета таймера
var targetDate = {
  days: 1,
  hours: 0,
  minutes: 0,
  seconds: 0
}

initializeClock("countdown", TargetTime(targetDate));
