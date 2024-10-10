const container = document.querySelector('.container');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF2', '#F3FF33'];

// Crear múltiples figuras usando un ciclo for
for (let i = 0; i < 30; i++) {
  const shape = document.createElement('div');
  shape.classList.add('shape');

  // Seleccionar un color aleatorio de la lista
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  shape.style.backgroundColor = randomColor;

  // Añadir la figura al contenedor
  container.appendChild(shape);
}
