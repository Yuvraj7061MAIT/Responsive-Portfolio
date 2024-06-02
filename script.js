// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the anchor tags
  const linkedinIcon = document.getElementById("linkedin");
  const githubIcon = document.getElementById("github");
  const instagramIcon = document.getElementById("instagram");

  // Add event listeners to each icon
  linkedinIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://www.linkedin.com/in/yuvraj-singh-ml/"; // Redirect to LinkedIn
  });

  githubIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://github.com/Yuvraj7061MAIT"; // Redirect to GitHub
  });

  instagramIcon.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://www.instagram.com/yuvraj.singh7061/"; // Redirect to Instagram
  });
  Hire.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://www.linkedin.com/in/yuvraj-singh-ml/"; // Redirect 
  });
  Connect.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://www.linkedin.com/in/yuvraj-singh-ml/"; // Redirect to 
  });

});


document.addEventListener("DOMContentLoaded", function() {
  // Get references to the anchor tags
  const CV = document.getElementById("CV");

  CV.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = "https://drive.google.com/file/d/1lCK64JYDfMeeF9hFsdW-R2Ld6fwhzN90/view?usp=drive_link"; // Redirect to LinkedIn
  });


});