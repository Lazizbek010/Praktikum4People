// VARIABLES

// HAMBURGER MENU
const bars = document.querySelector('.bars');
const navList = document.querySelector('.nav__list');

// EVENTS


// HAMBURGER MENU
bars.addEventListener('click',()=>{
  bars.classList.toggle('change')
  navList.classList.toggle('openResNav')
})

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  document.querySelector('.loading').style.display = 'none'
});