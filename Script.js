// Obten la fecha y hora objetivo (22/10/2023, 18:00 horas)
var fechaObjetivo = new Date("2023-10-22T18:00:00").getTime();

// Actualiza el contador cada segundo
var x = setInterval(function() {

    // Obten la fecha y hora actual
    var fechaActual = new Date().getTime();

    // Calcula la diferencia entre la fecha objetivo y la fecha actual
    var diferencia = fechaObjetivo - fechaActual;

    // Calcula días, horas, minutos y segundos restantes
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Muestra el contador regresivo en un elemento con id "cronometro"
    document.getElementById("cronometro").innerHTML = dias + "d " + horas + "h " +
    minutos + "m " + segundos + "s ";

    // Si la cuenta regresiva termina, muestra un mensaje
    if (diferencia < 0) {
        clearInterval(x);
        document.getElementById("cronometro").innerHTML = "¡Tiempo para las elecciones!";
    }
}, 1000);

