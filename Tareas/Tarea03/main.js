const container = document.querySelector('.container');
const balls = [];
const numBalls = 10;


for (let i = 0; i < numBalls; i++) {
  const ball = document.createElement('div');
  ball.classList.add('ball');
  container.appendChild(ball);

  
  const ballObj = {
    el: ball,
    x: Math.random() * (container.clientWidth - 40),
    y: Math.random() * (container.clientHeight - 40),
    dx: (Math.random() - 0.5) * 10,
    dy: (Math.random() - 0.5) * 10,
    color: getRandomColor()
  };

  ball.style.backgroundColor = ballObj.color;

  balls.push(ballObj);
}


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function animate() {
  balls.forEach(ball => {
    
    ball.x += ball.dx;
    ball.y += ball.dy;

    
    if (ball.x <= 0 || ball.x >= container.clientWidth - 40) {
      ball.dx = -ball.dx;  
    }
    if (ball.y <= 0 || ball.y >= container.clientHeight - 40) {
      ball.dy = -ball.dy;  
    }

    
    ball.el.style.transform = `translate(${ball.x}px, ${ball.y}px)`;
  });

  requestAnimationFrame(animate);
}


animate();
