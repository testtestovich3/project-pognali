var businesLink = document.querySelector(".payment__link");
var businesMenu = document.querySelector(".payment-popup");
var businesClose = businesMenu.querySelector(".payment-popup__close");

businesLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  businesMenu.classList.add("payment-popup--on");
});

businesClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  businesMenu.classList.remove("payment-popup--on");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (businesMenu.classList.contains("payment-popup--on")) {
            businesMenu.classList.remove("payment-popup--on");
        }
    }
});
