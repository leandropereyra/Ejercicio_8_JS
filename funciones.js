function devuelveTrue() {
    return true
}

async function promesaCinco() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* indicesPares() {
    let indice = 0
    while(true) {
        yield indice += 2
    }
}