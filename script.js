function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }






  

// future ref & learning:

// document.addEventListener("DOMContentLoaded", function() {
//   const slider = document.querySelector('.projects-slider-container');
//   let scrollAmount = 0;

//   document.querySelector('.arrow-left').addEventListener('click', () => {
//     scrollAmount -= 300; // Adjust scroll amount as needed
//     slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//   });

//   document.querySelector('.arrow-right').addEventListener('click', () => {
//     scrollAmount += 300; // Adjust scroll amount as needed
//     slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//   });
// });


