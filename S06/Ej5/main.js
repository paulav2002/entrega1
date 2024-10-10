/*///// 1. Primero identificaremos los elementos en HTML que queremos escuchar y manipular, tanto el "drop down" como el elemento <p> donde vamos a imprimir el texto.  ///*/
const SELECT = document.querySelector("select");
const P = document.querySelector("p");



/*///// 2. Definimos la función que se va a ejecutar cuando el usuario cambie el valor en el elemento <select> ///*/
function setWeather() {
    /*///// 2.1 Ya que esta función se ejecuta después de que cambia el valor, es seguro consultar directamente el valor del elemento <select> y guardarlo en una variable. ///*/
    const choice = SELECT.value;

    /*///// 2.2 Con ese valor en nuestra variable estamos listos para usarla como parámetro en el condicional switch. ///*/
    switch (choice) {
        /* 
            case o "caso" 
            es el comando para hacer la comparación entre el valor que pasamos como parámetro y nuestra condición, puede ser cualquier tipo de dato: número, texto, booleano, etc.

            En este caso estamos comparando el valor con variables de texto establecidas en HTML: sunny, rainy, snowing y overcast.

            Cuando la comparación sea "verdadera" ejecutará el código dentro de ese caso, el condicional también podría leerse por ejemplo como (choice == "sunny").

            Y el comando "break" da la instrucción de ya no continuar evaluando los siguientes casos y finalizar el condicional switch.

            Por último, en caso de que ningún "caso" o condición se cumpla, se ejecuta lo que hayamos definido en el bloque "default".
        */
        case "sunny":
            P.textContent =
            "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
            break;
        case "rainy":
            P.textContent =
            "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
            break;
        case "snowing":
            P.textContent =
            "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
            break;
        case "overcast":
            P.textContent =
            "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
            break;
        default:
            P.textContent = "";
    }
}



/*///// 3. Ya tenemos todos los compomente que necesitamos, finalmente podemos configurar el evento para escuchar el cambio en el elemento <select> y disparar nuestra función con nuestra condicional. ///*/
SELECT.addEventListener("change", setWeather);