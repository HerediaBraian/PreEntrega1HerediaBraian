window.alert("Bienvenido!")

let nombre, apellido;
while (true) {
nombre = prompt("Por favor, ingresa tu nombre");
if (nombre === null) {
alert("No ingresaste tu nombre.");
} else if (/^[A-Za-z]+$/.test(nombre)) {
break;
} else {
alert("Por favor, ingresa un nombre válido sin números.");
}
}
while (true) {
apellido = prompt("Por favor, ingresa tu apellido");
if (apellido === null) {
alert("No ingresaste tu apellido.");
} else if (/^[A-Za-z]+$/.test(apellido)) {
    alert("¡Hola, " + nombre + " " + apellido + "!");
break;
} else {
alert("Por favor, ingresa un apellido válido sin números.");
}
}
function alquilarCanchaPadel() {
let cantHoras, cantCancha, cantJugadores, nombresJugadores = [];
while (true) {
    cantHoras = prompt("Seleccione la duración para alquilar la cancha de pádel:\n1. 1 hora\n2. 1 hora y media\n3. 2 horas").toLowerCase();
    
    if (cantHoras === "") {
    alert("No seleccionaste la duración de alquiler.");
    } else if (cantHoras !== "1" && cantHoras !== "2" && cantHoras !== "3") {
    alert("Ingresa una opción válida (1, 2 o 3) para la duración de alquiler.");
    } else {
    let duracion = "";
    switch (cantHoras) {
        case "1":
        duracion = "1 hora";
        break;
        case "2":
        duracion = "1 hora y media";
        break;
        case "3":
        duracion = "2 horas";
        break;
    }
    alert("Duración de alquiler de la cancha de pádel registrada: " + duracion);
    break;
    }
}
while (true) {
    cantCancha = prompt("Selecciona la cantidad de canchas a reservar: 1 o 2.").toLowerCase();
    
    if (cantCancha === "") {
    alert("No seleccionaste la cantidad de canchas a reservar.");
    } else if (!/^[0-9]+$/.test(cantCancha) || (parseInt(cantCancha) !== 1 && parseInt(cantCancha) !== 2)) {
    alert("Ingresa un número válido (1 o 2) para la cantidad de canchas a reservar.");
    } else {
    alert("Cantidad de canchas a reservar registrada: " + cantCancha);
    break;
    }
}
while (true) {
    cantJugadores = prompt("Ingrese la cantidad de jugadores que participarán en el alquiler").toLowerCase();
    if (cantJugadores === "") {
        alert("No ingresaste la cantidad de jugadores.");
    } else if (parseInt(cantJugadores) != cantJugadores || cantJugadores < 1 || cantJugadores >8 ) {
        alert("Ingresa un número: como minimo 1, maximo 8 jugadores.");
    } else {
        alert("Cantidad de jugadores registrada: " + cantJugadores);
        break;
    }
}
for (let i = 1; i <= cantJugadores; i++) {
    let nombre = prompt("Ingrese el nombre del jugador #" + i);
    let checked = 0;

    while (checked === 0) {
    if (nombre === "") {
        alert("No ingresaste el nombre del jugador.");
        nombre = prompt("Ingrese el nombre del jugador #" + i);
    } else if (!/^[a-zA-Z]+$/.test(nombre)) {
        alert("Ingresa un nombre válido utilizando solo letras.");
        nombre = prompt("Ingrese el nombre del jugador #" + i);
    } else {
        alert("Nombre del jugador registrado: " + nombre);
        nombresJugadores.push(nombre);
        checked = 1;
    }
    }
}
alert("Informacion del turno reservado, los esperamos!:\nDuracion de la cancha: " + cantHoras + "\nCantidad de canchas: " + cantCancha + "\nJugadores: " + nombresJugadores.join(", "));
}
alquilarCanchaPadel();
