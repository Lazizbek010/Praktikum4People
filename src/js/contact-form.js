// CONTACTS US FORM
const overlay = document.querySelector(".overlay");
const sweetModalContent = document.querySelector(".sweet-modal-content");
const feedback = document.querySelector(".feedback");
const sweetModalClose = document.querySelector(".sweet-modal-close");
const contactusTextBtn = document.querySelector(".contactus__text");


// CONTACTS US FORM
contactusTextBtn.addEventListener("click", toggleModal);
sweetModalClose.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
feedback.addEventListener("submit", (e) => {
  e.preventDefault();
  toggleModal();
});
function toggleModal() {
  overlay.classList.toggle("hidden");
  sweetModalContent.classList.toggle("hidden");
}