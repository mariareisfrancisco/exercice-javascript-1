var one = document.querySelector(".one");

var changeColor = function () {
  one.classList.add("blue");
  // one.style.background = "blue";
};

one.addEventListener("click", changeColor);

var two = document.querySelector(".two");

var changeColor = function () {
  two.classList.toggle("red");
};

two.addEventListener("click", changeColor);

var three = document.querySelector(".three");
var four = document.querySelector(".four");

var disappear = function () {
  // four.style.display = "none";
  four.classList.toggle("is-hidden");
};

three.addEventListener("click", disappear);

var five = document.querySelector(".five");

var changeColor = function () {
  one.classList.add("blue");
  two.classList.add("red");
};

five.addEventListener("click", changeColor);

var six = document.querySelector(".six");

var changeColor = function () {
  one.classList.add("blue");
  two.classList.add("red");
  six.classList.add("green");
};

six.addEventListener("click", changeColor);
