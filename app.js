document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle');
  const menu = document.querySelector('.menu');
  const container = document.querySelector('.container');

  let isMenuVisible = true; // State to track visibility of the menu

  toggleButton.addEventListener('click', function() {
      menu.classList.toggle('hidden');

      if (isMenuVisible) {
          // If the menu is visible, hide it and expand the left div
          container.style.width = '100vw';
      } else {
          // If the menu is hidden, show it and shrink the left div
          container.style.width = '80vw';
      }
      isMenuVisible = !isMenuVisible;
  });
});

//code for light mode and dark mode toggle
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const profileIcon = document.getElementById("profile-icon");
const theme = document.querySelector(".view");
const logo = document.getElementById("logo")
const bars = document.getElementById('bars');
const lightbtn = document.getElementById("lightbtn");
const darkbtn = document.getElementById("darkbtn");

light.addEventListener('change', function() {
    if(this.checked){
        document.body.style.backgroundColor = "#F8F8FF";
        document.body.style.color = "black";
        bars.style.color = "blue";
        profileIcon.style.color = "blue";
        theme.style.backgroundColor = "#292c42";
        logo.src = "img/logo/logowhite.png";
        lightbtn.style.color = "white";
        darkbtn.style.color = "blue";
    }
    else{
        document.body.style.backgroundColor = "#e6e6e6";
        document.body.style.color = "#1d1d1d";
        bars.style.color = "white";
        profileIcon.style.color = "white";
        logo.src = "img/logo/logonobg.png";
        lightbtn.style.color = "blue";
        darkbtn.style.color = "white";
    }
})
dark.addEventListener('change', function() {
    if(this.checked){
        document.body.style.backgroundColor = "#1d1d1d";
        document.body.style.color = "white";    
        bars.style.color = "white"; 
        profileIcon.style.color = "white"; 
        theme.style.backgroundColor = "gray"; 
        logo.src = "img/logo/logonobg.png";
        darkbtn.style.color = "white";
        lightbtn.style.color = "blue";
    } else {
        document.body.style.backgroundColor = "#e6e6e6"; 
        document.body.style.color = "#1d1d1d";
        bars.style.color = "blue"; 
        profileIcon.style.color = "blue"; 
        theme.style.backgroundColor = "#292c42";
        logo.src = "img/logo/logowhite.png";
        darkbtn.style.color = "blue";
        lightbtn.style.color = "white";
    }
})