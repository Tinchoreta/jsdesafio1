
debugger
let jugar = true
let numero
let color
let i = 0
do {
    jugar = confirm("¿Querés jugar?")
    if (jugar != true) {
        break;
    }
    numero = parseInt(prompt("Ingresa un numero entre 1 y 10. Solo uno tiene un premio especial jeje, mucha suerte!"))
    color = prompt("Ingrese un color primario (ROJO, AZUL o AMARILLO)")

    if ((numero == 10) && (color.toUpperCase() == "AZUL" || color.toUpperCase() == "AMARILLO")) {
        console.warn("Felicitaciones: Elegiste el 10 de Riquelme")
        console.log("Como premio van " + numero + " Boca Campeón")
        for (i = 0; i < numero; i++) {
            console.log("Boca Campeón!")
        }
    } else {
        if ((numero == 10) && (color.toUpperCase() == "ROJO")) {
            console.warn("Felicitaciones: Elegiste el 10 del Muñeco")
            console.log("Como premio van " + numero + " River Campeón")
            for (i = 0; i < numero; i++) {
                console.log("River Campeón!")
            }
        }
        else {
            console.error("Felicitaciones: Elegiste: " + color + " y el numero:" + numero)
            console.log("Como premio van " + numero + " Sacachispas Campeón")
            for (i = 0; i < numero; i++) {
                console.log("Sacachispas campeón!")
            }
        }
    }

} while (Boolean(jugar))

console.log("Que aburrido! Game over. Que tengas un buen día =)")
