/* To make pictures slide. I got this code from Codepen and changed some parts*/

var controls = document.querySelectorAll(".controls");
for (var i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

var slides = document.querySelectorAll("#carousel-inner-id .carousel-item");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "carousel-item";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "carousel-item showing";
}

var playing = true;
var next = document.getElementById("next");
var previous = document.getElementById("previous");

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};

/* To Make the Language Choices Clickable.
   It doesn't work properly, for instance it doesn't work when you click on 
   some parts of the flag icon. I don't know why. */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("language-dropdown-item");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* To make the side Navbar slide left and right onclick.
  I would probably have to delete the side navbar from the  
  mobile version in real life but I kept it for now */
  
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("navmain").style.marginRight = "190px";
  document.getElementById("navmain").style.marginLeft = "-190px";
  document.getElementById("closingButton").style.display = "initial";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navmain").style.marginRight = "0";
  document.getElementById("navmain").style.marginLeft = "0";
  document.getElementById("closingButton").style.display = "none";
}

/* I had to add this code to make the closing button disappear 
when the page loads, otherwise it stays on the screen the whole time*/

function hideButton() {
  document.getElementById("closingButton").style.display = "none";
}
