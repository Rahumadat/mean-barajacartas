class   Carta {
    pinta = ["corazon" , "pica" , "trebol" , "diamante"];
    valorLiteral = ["As", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "jota", "queen", "kaiser"];
    valorNumerico = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    carta =[];
    constructor (){
        this.crearBaraja();
    }
    mezclarCarta(array) {
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
    restablecerCarta(){
        this.crearCarta();
    }
    
    cartaAleatoria(array){
        let unaCarta = [];
        let i;
        i = Math.floor(Math.random() * array.length);
        unaCarta = array.splice(i, 1);
    return {unaCarta, array};
    }
}

// let unaCarta = new Carta();
// console.log(unaCarta.carta);
// console.log(unaCarta.carta.length);

class Baraja extends Carta {
    constructor() {
        super();
    }
    crearBaraja(){
        for (let i = 0; i <= this.pinta.length-1; i++){
            for (let j = 0; j <= this.valorLiteral.length-1; j++){
                this.carta.push(`${this.valorNumerico[j]} - ${this.valorLiteral[j]} de ${this.pinta[i]}`);
            }
        }
    }  
}

let unaBaraja = new Baraja();
console.log(unaBaraja.baraja);

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