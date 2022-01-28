(function() {
  // currentPosition, size, slider
  let currentPosition = 0;
  const size = 300;
  const numberOfImages = 3;
  let counter = 1;

  const sliderEl = document.querySelector(".slider");

  function move(direction) {
    if(direction === "left") {
      if(counter !== numberOfImages) {
        currentPosition = currentPosition - size;
        counter++;
      }
    } else {
      if(counter !== 1) {
        currentPosition = currentPosition + size;
        counter--;
      }
    }
    sliderEl.style.transform = `translate(${currentPosition}px)`;
  };

  document.querySelector(".leftBtn").addEventListener("click", () => {
    move("left");
  });

  document.querySelector(".rightBtn").addEventListener("click", () => {
    move("right");
  });

})();