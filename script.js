
// Función para iniciar sesión
function iniciar_sesion() {
    const usuario = prompt("Ingrese su nombre de usuario:");
    const contraseña = prompt("Ingrese su contraseña:");

    // Aquí puedes añadir lógica para validar el usuario y la contraseña
    console.log(`Bienvenido, ${usuario}`);
}

// Función para capturar la producción diaria
function capturar_produccion_diaria(dia) {
    const produccion = parseInt(prompt(`Ingrese la cantidad de unidades producidas en el día ${dia + 1}:`), 10);
    
    // Validar que se ingresó un número
    if (isNaN(produccion) || produccion < 0) {
        console.log("Por favor, ingrese un número válido.");
        return capturar_produccion_diaria(dia); // Repetir hasta que se ingrese un número válido
    }

    return produccion;
}

// Función para calcular la ganancia
function calcular_ganancia(produccion) {
    let ganancia;

    if (produccion < 50) {
        ganancia = 0; // No se cubren costos
    } else if (produccion >= 50 && produccion <= 100) {
        ganancia = produccion * 0.05; // Ganancia del 5%
    } else {
        ganancia = produccion * 0.10; // Ganancia del 10%
    }

    return ganancia;
}

// Función para mostrar la ganancia
function mostrar_ganancia(dia, ganancia) {
    console.log(`Ganancia del día ${dia + 1}: $${ganancia.toFixed(2)}`);
}

// Función principal para el control de producción
function control_produccion() {
    iniciar_sesion();

    const dias = 7;
    let dia = 0;
    let total_ganancias = 0;

    while (dia < dias) {
        const produccion = capturar_produccion_diaria(dia);
        const ganancia = calcular_ganancia(produccion);
        mostrar_ganancia(dia, ganancia);
        total_ganancias += ganancia;
        dia++;
    }

    console.log(`Ganancia total en ${dias} días: $${total_ganancias.toFixed(2)}`);
}

// Ejecutar el control de producción
control_produccion();

