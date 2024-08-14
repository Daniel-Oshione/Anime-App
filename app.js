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
