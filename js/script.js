const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const navlink = document.querySelectorAll(".nav-links li a");

//Slide animations
const fromLeft = document.querySelectorAll(".from-left");
const fromRight = document.querySelectorAll(".from-right");
const fromBottom = document.querySelectorAll(".from-bottom");
//Scroll to top
const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 37) {
    header.classList.add("add-header-shadow");
  } else {
    header.classList.remove("add-header-shadow");
  }

  if (window.scrollY > 500) {
    scrollUp.style.opacity = "1";
  } else {
    scrollUp.style.opacity = "0";
  }
});

//SCROLL UP
scrollUp.addEventListener("click", () => {
  window.scroll(0, 0);
});

const toggleNav = () => {
  hamburger.addEventListener("click", () => {
    //Toggle show nav links
    navLinks.classList.toggle("hide-links");

    //Animate hamburger
    hamburger.classList.toggle("toggle-nav");
  });

  //Hide nav when clicking a link
  navlink.forEach((link, i) => {
    link.addEventListener("click", () => {
      navLinks.classList.toggle("hide-links");
      hamburger.classList.toggle("toggle-nav");
    });
  });
};

toggleNav();


//Theme 
const switchBtn = document.querySelector(".themeBtn");
const body = document.querySelector("body")
let darkMode = false;

switchBtn.addEventListener("click",()=>{
  darkMode = !darkMode;

  if(darkMode){
    body.classList.add("dark-mode");
    switchBtn.style.transform= "translateX(100%)"
  
  } else {
    body.classList.remove("dark-mode")
    switchBtn.style.transform= "translateX(0%)"

    
  }
})



