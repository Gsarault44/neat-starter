document.addEventListener("DOMContentLoaded", function () {
  console.log('babab')
  const buttonUp = document.getElementById("count-up");
  const buttonDown = document.getElementById("count-down");

  const doIncrementUp = function () {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
  };

  const doIncrementDown = function () {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
  };
  buttonUp.addEventListener("click", doIncrementUp);
  buttonDown.addEventListener("click", doIncrementDown);

});