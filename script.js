//BARAJA CARTAS

class   Baraja {
    pinta = ["corazon" , "pica" , "trebol" , "diamante"];
    valorLiteral = ["As", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "jota", "queen", "kaiser"];
    valorNumerico = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    baraja =[];
    constructor (){
        this.crearBaraja();
    }
    crearBaraja(){
        for (let i = 0; i <= this.pinta.length-1; i++){
            for (let j = 0; j <= this.valorLiteral.length-1; j++){
                this.baraja.push(`${this.valorLiteral[j]} de ${this.pinta[i]}`);
            }
        }
    }  

    mezclarBaraja(array) {
        let copy = [], n = array.length, i;
        while (n) {
            i = Math.floor(Math.random() * array.length);
            if (i in array) {
                copy.push(array[i]);
                delete array[i];
                n--;
            }
        }
        return copy;
    }

    restablecerBaraja(){
        this.crearBaraja();
    }
    
    cartaAleatoria(array){
        let unacarta = [];
        let i;
        i = Math.floor(Math.random() * array.length);
        unacarta = array.splice(i, 1);
    return {unacarta, array};
    }
}

let unaBaraja = new Baraja();
// console.log(unaBaraja.baraja);
// console.log(unaBaraja.baraja.length);

let unaBarajaDesordenada = unaBaraja.mezclarBaraja(unaBaraja.baraja);
console.log(unaBarajaDesordenada);

// unaBaraja.restablecerBaraja();
// let unaBarajaRestablecida = unaBaraja.baraja;
// console.log(unaBarajaRestablecida);

let unaCartaAleatoria = unaBaraja.cartaAleatoria(unaBaraja.baraja);
let otraCartaAleatoria = unaBaraja.cartaAleatoria(unaBaraja.baraja);
otraCartaAleatoria = unaBaraja.cartaAleatoria(unaBaraja.baraja);
console.log(unaCartaAleatoria.unacarta);
console.log(otraCartaAleatoria);

// let unaBarajaConMenosCartas


class Jugador {
    constructor(nombre, mano){
        nombre = nombre;
        mano = mano;
        this.NombreJugador(nombre);
    }
    NombreJugador(nombre){
        this.nombre = nombre;
        console.log((`el Jugador se llama ${this.nombre}`))

    }
    tenerMano(){
        
    }
    tomarCarta(){
        //tomar una carta de la variable unaBarajaDesordenada

    }
    descartarCarta(){

    }
    

}
let nuevojugador = new Jugador("Hortencio");



class Carta extends Baraja {
    cartaConNumeros =[]
    // constructor() {
    //     super()
        
    // }
    cartaNumeroValorLiteralPinta(){
        for (let i = 0; i <= this.pinta.length-1; i++){
            for (let j = 0; j <= this.valorLiteral.length-1; j++){
                this.cartaConNumeros.push(`${this.valorNumerico[j]}-${this.valorLiteral[j]} de ${this.pinta[i]}`);
            }
        }
    }

}
let unaCarta = new Carta();
let cartainfocompleta = cartaConNumeros.cartaNumeroValorLiteralPinta();
console.log(cartainfocompleta);




