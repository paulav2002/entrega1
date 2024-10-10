window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    let mouseX = 0;
    let mouseY = 0;
  
    const lines = [
      { x: 0, y: 0, angle: 0 },
      { x: 0, y: 0, angle: Math.PI / 4 },
    ];
  
    function drawLines() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
  
      lines.forEach(line => {
        const lineLength = 100;
        const endX = mouseX + lineLength * Math.cos(line.angle);
        const endY = mouseY + lineLength * Math.sin(line.angle);
  
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });
    }
  
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      drawLines();
    });
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  };
  