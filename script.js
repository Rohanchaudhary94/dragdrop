const balls = document.querySelectorAll('.ball');

let isDragging = false;
let dragStartX;
let dragStartY;
let initialX;
let initialY;

balls.forEach(ball => {
  ball.addEventListener('mousedown', function(e) {
    isDragging = true;
    initialX = e.clientX;
    initialY = e.clientY;
    dragStartX = initialX - ball.offsetLeft;
    dragStartY = initialY - ball.offsetTop;
  });

  ball.addEventListener('mousemove', function(e) {
    if (isDragging === true) {
      e.preventDefault();
      
      const currentX = e.clientX - dragStartX;
      const currentY = e.clientY - dragStartY;
      
      ball.style.left = currentX + 'px';
      ball.style.top = currentY  + 'px';
    }
  });

  ball.addEventListener('mouseup', function(e) {
    isDragging = false;
  });
});
