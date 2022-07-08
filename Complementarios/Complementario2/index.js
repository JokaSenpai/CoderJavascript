class Bebidas {
    constructor (bebida,precio){
    this.bebida = bebida;
    this.precio = precio;
    this.alcohol = true;
    }
    noTieneAlcohol(){
        this.alcohol = false;
    }
}

const chupe = [];
let sinAlcohol = 0;

for (i=0;i<4;i++){
    let nombre = prompt("Ingrese el nombre de la bebida");
    let precio = parseInt(prompt("Ingrese el precio de la bebida")); 
    let tieneAlcohol = parseInt(prompt("La siguiente bebida tiene alcohol? Ingrese 1 para SI o 0 para NO "));
    chupe.push(new Bebidas(nombre,precio));
    if (tieneAlcohol === 0){
        sinAlcohol++;
        chupe[i].noTieneAlcohol();
    } else if (tieneAlcohol != 0 && tieneAlcohol != 1){
        alert("Ingreso otro numero/caracter. Por defecto va a contar como alcoholica");
    }

}


// Comprobando que se itere y se carguen los objetos en el array

console.log(chupe);

const comproMucho = (arre) => {
    if(arre.length >= 5){
        console.log("Efectivamente,usted se gastó bastante en bebidas");
    } else {
        console.log("Tuvo una compra moderada");
    }
}

// Comprobando que funcione la funcion comproMucho()
comproMucho(chupe);

// Comprobando que se cargue bien la variable sinAlcohol
console.log(`En la lista "chupe" se encuentran:${sinAlcohol} bebida/s sin alcohol`);


