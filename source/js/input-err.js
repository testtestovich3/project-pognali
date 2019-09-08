var plansForm = document.querySelector(".form__wrapper");
var textArea = plansForm.querySelector('.trip-step__destination-text')
var firstStep = plansForm.querySelector(".first-destination");
var secondStep = plansForm.querySelector(".second-destination");
var message = plansForm.querySelector(".trip-step__destination-err");


plansForm.addEventListener("submit", function(evt) {
    if (!firstStep.value || !firstStep.value)
    evt.preventDefault();
    message.classList.add("trip-step__destination-err--on");
    textArea.classList.add("trip-step__destination-text--err");
});
