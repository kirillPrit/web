document.getElementById("menu-button").onclick = function() {open()};
function open() {
    document.getElementById("list").classList.toggle("list-active");
}
document.addEventListener("DOMContentLoaded", function(event) {
  var element = document.querySelector('.list');

  function resize() {
    if (window.innerWidth < 800) {
      element.classList.add('list');
    } else {
      element.classList.remove('list-active');
    }
  }
  // For performance reasons, this method should be 
  // "debounced" so that it doesn't have to execute 
  // on every resize event, only when you're done resizing.
  window.onresize = resize;
});