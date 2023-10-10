// FAQ LIST ACCORDION
const memberNameCustom = document.querySelectorAll(".member-name-custom");
const memberItem = document.querySelectorAll(".member-item");
memberNameCustom.forEach((li, i) => {
    li.addEventListener("click", (e) => {
      memberNameCustom.forEach((el) => {
        el.classList.remove("active");
      });
      li.classList.toggle("active");
      memberItem.forEach((pi, j) => {
        if (i === j) {
          pi.classList.toggle("accordion");
        } else {
          pi.classList.remove("accordion");
        }
      });
    });
  });