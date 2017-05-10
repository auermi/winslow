// Format Page Title
if (window.location.pathname === '/') {
  document.title = '{{ @blog.title }}';
} else {
  var metaTitle = '{{meta_title}}';
  document.title = metaTitle.charAt(0).toUpperCase() + metaTitle.slice(1) - '{{@blog.title}}';
}

// Initialize mobile menu
var menu = document.getElementById('menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('active');
  document.body.classList.toggle('overflow-hidden');
});
