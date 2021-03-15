'use strict';

var obj = document.getElementById("wrp");
console.log(obj)
var startPoint = {};
var nowPoint;
var ldelay;
var left = 0;
obj.addEventListener(
  "touchstart",
  function (event) {
    event.preventDefault();
    event.stopPropagation();
    startPoint.x = event.changedTouches[0].pageX;
    startPoint.y = event.changedTouches[0].pageY;
    ldelay = new Date();
  },
  true
);
/*Ловим движение пальцем*/
obj.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
    event.stopPropagation();
    var otk = {};
    nowPoint = event.changedTouches[0];
    otk.x = nowPoint.pageX - startPoint.x;
    /*Обработайте данные*/

    /*Для примера*/
    if (Math.abs(otk.x) > 100) {
      if (otk.x < 0) {
        /*СВАЙП ВЛЕВО(ПРЕД.СТРАНИЦА)*/
        left = left - window.innerWidth / 5 + 10;
        obj.style.left = left + "px";
        console.log(window.innerWidth);
      }
      if (otk.x > -100) {
        left = left + window.innerWidth / 5 + 10;
        obj.style.left = left + "px";
        /*СВАЙП ВПРАВО(СЛЕД.СТРАНИЦА)*/
      }
      console.log(startPoint);
      startPoint = { x: nowPoint.pageX, y: nowPoint.pageY };
      console.log(startPoint);
    }
  },
  true
);
/*Ловим отпускание пальца*/
obj.addEventListener(
  "touchend",
  function (event) {
    var pdelay = new Date();
    nowPoint = event.changedTouches[0];
    var xAbs = Math.abs(startPoint.x - nowPoint.pageX);
    var yAbs = Math.abs(startPoint.y - nowPoint.pageY);
    if ((xAbs > 20 || yAbs > 20) && pdelay.getTime() - ldelay.getTime() < 200) {
      if (xAbs > yAbs) {
        if (nowPoint.pageX < startPoint.x) {
          /*СВАЙП ВЛЕВО*/ obj.style.left = obj.style.left + 200 + "px";
          console.log("Влево");
        } else {
          /*СВАЙП ВПРАВО*/
          console.log("Вправо");
          obj.style.left = obj.style.left - xAbs + "px";
        }
      } else {
        if (nowPoint.pageY < startPoint.y) {
          /*СВАЙП ВВЕРХ*/
        } else {
          /*СВАЙП ВНИЗ*/
        }
      }
    }
  },
  true
);
