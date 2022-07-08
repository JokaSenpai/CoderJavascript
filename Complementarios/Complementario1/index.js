
/* Ejercicio con for */

alert("Bienvenido, soy el saludador. Ingrese la cantidad de saludos que desea acontinuación");
let saludador = parseInt(prompt("Ingrese la cantidad de saludos deseado"));

for (i=1;i<=saludador;i++){
    alert(`Hola! N° ${i}`);
}

/* Ejercicio con while */

alert("Ahora llegó el turno del 'contador'");
let contador = parseInt(prompt("Ingrese cuanto quiere contar empezando desde 1"));
let j=1;
while (j<=contador){
    let resta = contador - j;
    
    if (j=== contador){
        alert(`Llegamos al último número: ${j} y no quedan numeros para contar!`);
    }else{
        alert(`El numero actual es: ${j}. Quedan ${resta} numeros por contar!`); 
    }

    j++;

}

/* Ejercicio con switch */

alert("Por último queremos saber tu nacionalidad");

nacionalidad=prompt("Ingresa tu país de origen").toLowerCase();

switch(nacionalidad){
    case "argentina":
        alert("Usted seleccionó: Argentina");
        break;
    case "uruguay":
        alert("Usted seleccionó: Uruguay");
        break;
    case "colombia":
        alert("Usted seleccionó: Colombia");
        break;
    default:
        alert(`Usted es de un país increible como: ${nacionalidad}`);
        break;
}


