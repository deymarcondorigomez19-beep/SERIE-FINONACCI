// =============================================
// Fibonacci en el Diseño Natural de las Flores
// =============================================

// Devuelve un emoji de flor según el valor Fibonacci
// (simula qué flor tendría ese número de pétalos)
function obtenerFlor(numero) {
    if (numero <= 1)  return "🌱";
    if (numero == 2)  return "🌿";
    if (numero == 3)  return "🌷";
    if (numero == 5)  return "🌸";
    if (numero == 8)  return "🌼";
    if (numero == 13) return "🌺";
    if (numero == 21) return "🌻";
    if (numero == 34) return "💐";
    if (numero == 55) return "🌻";
    if (numero == 89) return "🌹";
    return "🌼";
}

// Función principal del simulador
function calcularFibonacci() {

    // 1. Capturamos el valor ingresado por el usuario
    var niveles = parseInt(document.getElementById('niveles').value);
    var divResultado = document.getElementById('resultado');

    // 2. Validación: debe ser un número entre 1 y 30
    if (isNaN(niveles) || niveles < 1 || niveles > 30) {
        divResultado.innerHTML =
            "<span class='error-msg'>⚠ Por favor, ingresa un número entre 1 y 30.</span>";
        return;
    }

    // 3. Iniciamos los dos primeros términos de la serie
    var a = 0;  // término anterior
    var b = 1;  // término actual
    var c;      // variable temporal para calcular el siguiente

    // 4. Construimos el HTML del resultado con concatenación de cadenas
    var html = "<h3>Secuencia de " + niveles + " niveles de crecimiento:</h3>";
    html = html + "<div class='fib-grid'>";

    // 5. Ciclo while: avanzamos nivel por nivel
    var i = 1;
    while (i <= niveles) {

        // Agregamos una tarjeta por cada nivel con su valor Fibonacci
        html = html +
            "<div class='fib-item'>" +
            "<span class='fib-nivel'>Nivel " + i + "</span>" +
            "<span class='fib-valor'>" + a + "</span>" +
            "<span class='fib-flor'>" + obtenerFlor(a) + "</span>" +
            "</div>";

        // Calculamos el siguiente término de la serie: c = a + b
        c = a + b;

        // Avanzamos: a pasa a ser b, y b pasa a ser c
        a = b;
        b = c;

        // Incrementamos el contador del nivel
        i = i + 1;
    }

    html = html + "</div>";

    // 6. Mostramos el resultado en la página
    divResultado.innerHTML = html;
}