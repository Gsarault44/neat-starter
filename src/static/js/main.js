document.addEventListener("DOMContentLoaded", function () {

  // COUNTER 
  const buttonUp = document.getElementById("count-up");
  const buttonDown = document.getElementById("count-down");

  const doIncrementUp = function () {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
  };

  const doIncrementDown = function () {
    const counter = document.getElementById("counter");
    if (parseInt(counter.textContent) > 0) {
      counter.textContent = parseInt(counter.textContent) - 1;
    }
  };
  buttonUp.addEventListener("click", doIncrementUp);
  buttonDown.addEventListener("click", doIncrementDown);


  // ACCORDION
  const questions = document.querySelectorAll(".question")

  questions.forEach((question) => {
    question.addEventListener("click", questionClick);
  })

  function questionClick() {
    this.parentElement.classList.toggle("shown");
  }




});