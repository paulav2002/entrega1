function drawFilledCircle(ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.closePath();
}


function drawEmptyCircle(ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}

function drawCircleGrid() {
    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');
    const radius = 20;
    const spacing = radius * 2;

    for (let row = 0; row * spacing < canvas2.height; row++) {
        for (let col = 0; col * spacing < canvas2.width; col++) {
            const x = col * spacing + radius;
            const y = row * spacing + radius;
            
            if ((row + col) % 2 === 0) {
                drawFilledCircle(ctx2, x, y, radius);
            } else {
                drawEmptyCircle(ctx2, x, y, radius);
            }
        }
    }
}

drawCircleGrid();