// HAMBURGER MENU
const bars = document.querySelector('.bars');
const navList = document.querySelector('.nav__list');
bars.addEventListener('click',()=>{
  bars.classList.toggle('change')
  navList.classList.toggle('openResNav')
})
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('.loading').style.display = 'none'
});