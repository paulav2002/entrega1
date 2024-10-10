/*///// Código del ejercicio de configuración de canvas (S05. Ex.01.) ///*/
const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}



/*///// 1. Definir parámetros de movimiento ///*/
let speed = {
  x1: 2,
  y1: 1,
  x2: 1,
  y2: 1
};
