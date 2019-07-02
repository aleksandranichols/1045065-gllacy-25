var feedback = document.querySelector(".initiate-feedback-button");
var popup = document.querySelector(".feedback-form");
var close = popup.querySelector(".close-button");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("feedback-form-show");
  });
close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("feedback-form-show");
  });
