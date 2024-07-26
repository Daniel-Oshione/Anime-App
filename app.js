document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle');
    const dropDown = document.querySelector('.menu');
  
    toggleButton.addEventListener('click', function() {
      dropDown.classList.toggle('visible');
      sliderContent.style.display = 'none';
    });
  });