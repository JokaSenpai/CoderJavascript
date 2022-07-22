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

// Declaracion de variables

const chupe = [];
let sinAlcohol = 0;
let eleccion = parseInt(prompt("Si desea ver solo la lista de bebidas seleccione 1, de lo contrario ud. querra ingresar bebidas"));
// let eleccionAlcohol;
let bebConAlcohol = document.getElementById("bebidasSinAlcohol");
let bebSinAlcohol = document.getElementById("bebidasAlcohol");

let listaAlcohol = [
    {id:1,nombre:"Ron"},
    {id:2,nombre:"Whisky"},
    {id:3,nombre:"Gin"},
    {id:4,nombre:"Ginebra"},
    {id:5,nombre:"Cerveza"},
    {id:6,nombre:"Vino"}
];
let listaSinAlcohol =[
    {id:1,nombre:"Coca Cola"},
    {id:2,nombre:"Fanta"},
    {id:3,nombre:"Sprite"},
    {id:4,nombre:"Mirinda"},
    {id:5,nombre:"Paso de los toros"},
    {id:6,nombre:"7up"}
];

// Condicional si user solo quiere ver lista o ingresar bebidas

if (eleccion === 1){
    let eleccionAlcohol = parseInt(prompt("Si desea visualizar lista con alcohol ingrese 1, Sin alcohol ingrese 2 y si desea visualizar ambas bebidas ingrese cualquier cosa"));
     switch(eleccionAlcohol){
        case 1:
            let h2 = document.createElement("h2");
            h2.innerHTML = "Lista de bebidas con Alcohol";
            bebConAlcohol.appendChild(h2);

            for(const item of listaAlcohol){
                let li = document.createElement("li");
                li.innerHTML = `${item.nombre}`;
                bebConAlcohol.appendChild(li);
        }
        
        break;
        case 2:
            let h2sin = document.createElement("h2");
            h2sin.innerHTML = "Lista de bebidas sin Alcohol";
            bebSinAlcohol.append(h2sin);

            for(const item of listaSinAlcohol){
                let li = document.createElement("li");
                li.innerHTML = `${item.nombre}`;
                bebSinAlcohol.append(li);
        }
        
        break;

        default:
        break;
     }
} else {
    for (i=0;i<5;i++){
        let nombre = prompt("Ingrese el nombre de la bebida");
        if (nombre === null){
            nombre = `Bebida N° ${i}`;
        }
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
    const totalChupe = chupe.reduce((acumulador, bebida)=> acumulador + bebida.precio,0);
    
    
    const comproMucho = (arre) => {
        if(totalChupe >= 3000){
            console.log(`Efectivamente,usted se gastó bastante en bebidas. Total: $${totalChupe}`);
        } else {
            console.log(`Tuvo una compra moderada. Total: $${totalChupe}`);
        }
    }
    
    // Comprobando que funcione la funcion comproMucho()
    comproMucho(chupe);
    
    // Comprobando que se cargue bien la variable sinAlcohol
    console.log(`En la lista "chupe" se encuentran:${sinAlcohol} bebida/s sin alcohol`);
}





