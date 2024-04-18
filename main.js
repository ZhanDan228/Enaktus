const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)



function startScroll() {
  var scrollingText = document.querySelector('.scrolling-text p');
  scrollingText.style.animationPlayState = 'running';
}

function stopScroll() {
  var scrollingText = document.querySelector('.scrolling-text p');
  scrollingText.style.animationPlayState = 'paused';
}



// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove("active");
          if (i === index) {
              slide.classList.add("active");
          }
      });
  }

  document.querySelector(".prev").addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
  });

  document.querySelector(".next").addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
  });
});
