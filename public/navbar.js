// JavaScript for toggling mobile menu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
  
    // Toggle menu on button click
    if (menuButton) {
      menuButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  });
  