const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}


/*///// 1. Definición de nuestra clase base Círculo para generar objetos ///*/
class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "aqua";
        this.borderWidth = 4;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speed = {
            x: Math.random() * 1.4,
            y: 3
        }
    }

    /*///// 2. Crearemos nuestra condicional dentro de una función donde evaluaremos si es necesario que los círculos cambien de dirección para regresar dentro de la pantalla. ///*/
    checkDirection() {
        /*
            En "pseudo código", lo que queremos que haga nuestro objeto es que si se va a salir por el lado derecho, queremos deje de avanzar en esa dirección y ahora se mueva en la dirección opuesta, o sea a la izquierda. Lo mismo aplica para cada lado.

            Entonces necesitamos una condición para identificar si nuestro objeto está tocando el borde o incluso si ya lo rebasó, cuando eso suceda, la dirección del movimiento (o la velocidad en este caso) será la opuesta, si su velocidad en X por ejemplo era 1, ahora tiene que ser -1, de ese forma en lugar de moverse a la derecha, comenzará a moverse a la izquierda.
        */

        
        /*///// 2.1 Primero usaremos un condicional para evaluar horizontalmente hacia que dirección debe moverse el objeto. ///*/
        if (this.x >= window.innerWidth) {
            // En otras palabras, si la posición de este objeto es igual o supera el borde de la derecha, ejecuta este código:
            
            this.speed.x = this.speed.x * -1; // Todo número multiplicado por menos 1 nos da como resultado al mismo número pero con el signo opuesto (si es negativo se vuelve positivo y viceversa).

        } else if (this.x <= 0) {
            // Ahora evaluamos el borde izquierdo, si el objeto está tocando el borde izquierdo o ya lo rebasó, ejecuta este código:
            this.speed.x = this.speed.x * -1

        }


        /*///// 2.2 Ahora haremos lo mismo pero en el eje vertical. ///*/
        if (this.y >= window.innerHeight) {
            // En otras palabras, si la posición de este objeto es igual o supera el borde inferior, ejecuta este código:
            this.speed.y = this.speed.y * -1;

        } else if (this.y <= 0) {
            // Ahora evaluamos el borde superior, si el objeto está tocando el borde superior o ya lo rebasó, ejecuta este código:
            this.speed.y = this.speed.y * -1;

        }
    }

    updatePosition() {
        /*///// 3. Antes de mover este objeto, vamos a ejecutar nuestro condicional para saber si está yendo en la dirección correcta o si hay que invertirla. ///*/
        this.checkDirection();

        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}



/*///// 4. Array conteniendo los objetos a dibujar. ///*/
let misCirculos = [];



/*///// 5. Creación de múltiples círculos. ///*/
const TOTAL_CIRCULOS = 50;
for (let i = 0; i < TOTAL_CIRCULOS; i++) {
    let nuevoCirculo = new Circulo(); // Creación.
    misCirculos.push(nuevoCirculo); // Guardado dentro del Array.
}



/*///// 6. Definimos la funcion de renderizado que estaremos repitiendo usando requestAnimationFrame() ///*/
function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    /*///// 7. Nuevamente usamos un ciclo for para detectar cuantos círculos tenemos en total y dibujarlos ///*/
    for (let i = 0; i < misCirculos.length; i++) {
        misCirculos[i].draw();
    }

    requestAnimationFrame(render);
}




/*///// 8. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);