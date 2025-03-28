// Juego "Adivina el Número"

// Generamos un número aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
// Definimos la cantidad de intentos permitidos
let intentos = 3;
// Variable para determinar si el jugador ha adivinado
let adivinado = false;

// Bucle que se ejecuta mientras queden intentos y el número no haya sido adivinado
while (intentos > 0 && !adivinado) {
    // Pedimos al usuario que ingrese un número
    let entrada = prompt(`Adivina un número entre 1 y 10. Tienes ${intentos} intentos:`);
    
    // Verificamos si la entrada es válida (no vacía ni texto)
    if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
        alert("Por favor, ingresa un número válido.");
        continue; // Volvemos a pedir el número sin perder un intento
    }

    // Convertimos la entrada a número entero
    let numeroUsuario = parseInt(entrada);

    // Validamos que el número esté dentro del rango permitido
    if (numeroUsuario < 1 || numeroUsuario > 10) {
        alert("El número debe estar entre 1 y 10.");
        continue; // No se descuenta intento si el número está fuera del rango
    }

    // Comparamos el número ingresado con el número secreto
    if (numeroUsuario === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número.");
        adivinado = true; // Marcamos como adivinado para salir del bucle
    } else {
        intentos--; // Restamos un intento
        if (intentos > 0) {
            alert(`Número incorrecto. Te quedan ${intentos} intentos.`);
        } else {
            alert(`Se acabaron los intentos. El número secreto era ${numeroSecreto}.`);
        }
    }
}