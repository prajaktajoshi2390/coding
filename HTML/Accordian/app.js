(function() {
  document.querySelectorAll(".section").forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle("active");
      
      if(element.nextElementSibling.style.maxHeight) {
        element.nextElementSibling.style.maxHeight = null;
      } else {
        element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + "px";
      }
    });
    
  });
})();