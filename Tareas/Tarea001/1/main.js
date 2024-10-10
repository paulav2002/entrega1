function drawFilledCircle(ctx, x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'gray';
    ctx.fill();
    ctx.closePath();
}


function drawVerticalColumn() {
    const canvas1 = document.getElementById('canvas1');
    const ctx1 = canvas1.getContext('2d');
    const radius = 20;
    const spacing = radius * 2;

    
    for (let i = 0; i * spacing < canvas1.height; i++) {
        const x = radius; 
        const y = i * spacing + radius;
        drawFilledCircle(ctx1, x, y, radius);
    }
}


drawVerticalColumn();