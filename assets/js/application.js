// Initialize mobile menu
var menu = document.getElementById('menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});
