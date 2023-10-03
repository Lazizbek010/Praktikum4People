// VARIABLES
// CONTACTS US FORM
const overlay = document.querySelector(".overlay");
const sweetModalContent = document.querySelector(".sweet-modal-content");
const feedback = document.querySelector(".feedback");
const sweetModalClose = document.querySelector(".sweet-modal-close");
const contactusTextBtn = document.querySelector(".contactus__text");

// FAQ LIST ACCORDION
const memberNameCustom = document.querySelectorAll(".member-name-custom");
const memberItem = document.querySelectorAll(".member-item");

// EVENTS
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

// EVENTS
// FAQ LIST ACCORDION

memberNameCustom.forEach((li, i) => {
  li.addEventListener("click", (e) => {
    memberItem.forEach((pi, j) => {
      if (i === j) {
        pi.classList.toggle("accordion");
        li.classList.add("active");
        console.log(li);
      } else if (i !== j) {
        pi.classList.remove("accordion");
        li.classList.remove("active");
      }
    });
  });
});
